import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserLayout from '../Layouts/UserLayout';
import featureImage1 from '../images/freelance.jpg';
import featureImage2 from '../images/sport.jpg';
import featureImage3 from '../images/business.jpg';

const featureImages = [featureImage1, featureImage2, featureImage3];

const SubCategoryList = () => {
  const [subCategories, setSubCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCategory } = location.state;

  useEffect(() => {
    // Function to fetch subcategories from localStorage
    const fetchSubCategories = () => {
      const savedSubCategories = JSON.parse(localStorage.getItem("subCategories")) || {};
      setSubCategories(savedSubCategories[selectedCategory] || []);
    };

    fetchSubCategories(); // Initial fetch

    // Event listener for storage changes
    const handleStorageChange = () => {
      fetchSubCategories();
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [selectedCategory]);

  const handleTemplateClick = (subCategory) => {
    const selectedTemplates = JSON.parse(localStorage.getItem("templateSelections"))?.[subCategory.name] || [];
    navigate('/TemplateDisplay', { state: { selectedCategory, subCategory: subCategory.name, selectedTemplates } });
  };

  return (
    <UserLayout>
      <section className="features-section full-width-section">
        <h2>SubCategories of {selectedCategory}</h2>
        <div className="features">
          {subCategories.map((subCategory, index) => (
            <div key={index} className="feature">
              <img src={featureImages[index % featureImages.length]} alt={`Feature ${index + 1}`} />
              <h3>{subCategory.name}</h3>
              <button type="button" onClick={() => handleTemplateClick(subCategory)}>
                Select Template
              </button>
            </div>
          ))}
        </div>
      </section>
    </UserLayout>
  );
};

export default SubCategoryList;
