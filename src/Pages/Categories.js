import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLayout from '../Layouts/UserLayout';
import featureImage1 from '../images/freelance.jpg';
import featureImage2 from '../images/sport.jpg';
import featureImage3 from '../images/business.jpg';

const featureImages = [featureImage1, featureImage2, featureImage3];

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCategories);
  }, []);

  const handleSubcategoryClick = (categoryName) => {
    navigate('/subcategories', { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <UserLayout>
        <section className="features-section full-width-section">
          <h2>Please select your desired Category</h2>
          <div className="features">
            {categories.map((category, index) => (
              <div key={index} className="feature">
                <img src={featureImages[index % featureImages.length]} alt={`Feature ${index + 1}`} />
                <h3>{category.name}</h3>
                <button type="button" onClick={() => handleSubcategoryClick(category.name)}>
                  Select Subcategory
                </button>
              </div>
            ))}
          </div>
        </section>
      </UserLayout>
    </>
  );
};

export default Category;
