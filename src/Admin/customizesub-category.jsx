import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';

export default function SubCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const maxSubCategories = 2;
  const navigate = useNavigate();

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    const existingSubCategories = JSON.parse(localStorage.getItem("subCategories")) || {};
    setSubCategories(existingSubCategories[selectedCategory] || []);
  }, [selectedCategory]);

  const handleSubCategoryChange = (index, value) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index].name = value;
    setSubCategories(updatedSubCategories);
    updateLocalStorage(updatedSubCategories);
  };

  const handleAddSubCategory = () => {
    if (subCategories.length < maxSubCategories) {
      const newSubCategory = { name: "" };
      setSubCategories(prev => {
        const newSubCategories = [...prev, newSubCategory];
        updateLocalStorage(newSubCategories);
        return newSubCategories;
      });
    }
  };

  const handleRemoveSubCategory = (index) => {
    setSubCategories(prev => {
      const updatedSubCategories = [...prev];
      updatedSubCategories.splice(index, 1);
      updateLocalStorage(updatedSubCategories);
      return updatedSubCategories;
    });
  };

  const updateLocalStorage = (updatedSubCategories) => {
    const existingData = JSON.parse(localStorage.getItem("subCategories")) || {};
    const data = {
      ...existingData,
      [selectedCategory]: updatedSubCategories,
    };
    localStorage.setItem("subCategories", JSON.stringify(data));
  };

  const handleSave = () => {
    updateLocalStorage(subCategories);
  };

  const handleSaveAndNavigate = () => {
    handleSave();
    navigate('/category', { state: { selectedCategory, subCategories } });
  };

  return (
    <div>
      <AdminLayout>
        <div className="bg-white lg:h-auto xs:h-full xl:h-[1000px] xs:pl-3 xs:pr-3 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          <div className="lg:ml-72 justify-center items-center pt-20">
            <h1 className="lg:text-[30px] text-center">Customize SubCategories</h1>
            <div className="mx-auto px-3 w-[50rem] my-2 py-3">
              <div className="my-2">
                <label className="font-bold text-lg">Select Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border-[#282B8F] w-full"
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {subCategories.map((subCategory, index) => (
                <div key={index} className="my-2 border-b py-3">
                  <div className="my-2 flex items-center">
                    <label className="font-bold text-lg mr-2">SubCategory Name:</label>
                    <input
                      type="text"
                      value={subCategory.name}
                      onChange={(e) => handleSubCategoryChange(index, e.target.value)}
                      className="border-[#282B8F] w-full mr-2"
                    />
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-lg"
                      onClick={() => handleRemoveSubCategory(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-center items-center my-4">
                {subCategories.length < maxSubCategories && (
                  <button className="rounded-lg bg-blue-500 text-white px-4 py-2" onClick={handleAddSubCategory}>
                    Add SubCategory
                  </button>
                )}
              </div>

              <div className="flex justify-center items-center my-4">
                <button className="rounded-lg bg-yellow-500 text-white px-4 py-2" onClick={handleSave}>
                  Save SubCategories
                </button>
                <button className="rounded-lg bg-green-500 text-white px-4 py-2 ml-4" onClick={handleSaveAndNavigate}>
                  Save & Navigate
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}
