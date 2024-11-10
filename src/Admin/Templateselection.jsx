import React, { useEffect, useState } from 'react';
import AdminLayout from '../Layouts/AdminLayout';
import { PortfolioTemplates } from '../PortfolioUtils/Data/Portfolio';

export default function TemplateSelection() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedTemplates, setSelectedTemplates] = useState([]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    const existingSubCategories = JSON.parse(localStorage.getItem("subCategories")) || {};
    setSubCategories(existingSubCategories[selectedCategory] || []);
  }, [selectedCategory]);

  useEffect(() => {
    const existingSelections = JSON.parse(localStorage.getItem("templateSelections")) || {};
    setSelectedTemplates(existingSelections[selectedSubCategory] || []);
  }, [selectedSubCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory("");
    setSelectedTemplates([]);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleTemplateCheck = (templateName) => {
    const updatedTemplates = selectedTemplates.includes(templateName)
      ? selectedTemplates.filter(name => name !== templateName)
      : [...selectedTemplates, templateName];

    if (updatedTemplates.length <= 2) {
      setSelectedTemplates(updatedTemplates);
    } else {
      alert("You can only select up to 2 templates.");
    }
  };

  const handleSaveSelection = () => {
    const existingSelections = JSON.parse(localStorage.getItem("templateSelections")) || {};
    existingSelections[selectedSubCategory] = selectedTemplates;
    localStorage.setItem("templateSelections", JSON.stringify(existingSelections));
    alert("Template selection saved!");
  };

  const renderTemplates = (templates) => {
    return templates.map((template, index) => (
      <div key={index} className="ml-4 my-2">
        <input
          type="checkbox"
          id={`template-${index}`}
          checked={selectedTemplates.includes(template.template_name)}
          onChange={() => handleTemplateCheck(template.template_name)}
          className="mr-2"
        />
        <label htmlFor={`template-${index}`}>
          <img src={template.template_img} alt={template.template_name} className="w-16 h-16 inline-block mr-2" />
          {template.template_name}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <AdminLayout>
        <div className="bg-white lg:h-auto xs:h-full xl:h-[1000px] xs:pl-3 xs:pr-3 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          <div className="lg:ml-72 justify-center items-center pt-20">
            <h1 className="lg:text-[30px] text-center">Select a Template</h1>
            <div className="mx-auto px-3 w-[50rem] my-2 py-3">
              <div className="my-2">
                <label className="font-bold text-lg">Select Category:</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="border-[#282B8F] w-full rounded-md p-2"
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCategory && (
                <div className="my-2">
                  <label className="font-bold text-lg">Select SubCategory:</label>
                  <select
                    value={selectedSubCategory}
                    onChange={handleSubCategoryChange}
                    className="border-[#282B8F] w-full rounded-md p-2"
                  >
                    <option value="" disabled>Select a subcategory</option>
                    {subCategories.map((subCategory, index) => (
                      <option key={index} value={subCategory.name}>
                        {subCategory.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedSubCategory && (
                <div className="my-2">
                  <label className="font-bold text-lg">Select Templates:</label>
                  <div className="border-[#282B8F] w-full rounded-md p-2 max-h-64 overflow-y-auto">
                    {renderTemplates(PortfolioTemplates)}
                  </div>
                </div>
              )}

              <div className="flex justify-center items-center my-4">
                <button className="rounded-lg bg-yellow-500 text-white px-4 py-2" onClick={handleSaveSelection}>
                  Save Template Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}
