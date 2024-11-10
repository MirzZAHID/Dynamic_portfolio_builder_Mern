import React, { useState } from "react";
import AdminLayout from "../Layouts/AdminLayout";

export default function CustomiseCategories() {
  const [categories, setCategories] = useState([
    { name: "Category 1", description: "" },
    { name: "Category 2", description: "" },
    // Add more categories as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (index, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index][field] = value;
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: "", description: "" }]);
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleSave = () => {
    // Save the categories to localStorage or your backend
    localStorage.setItem("categories", JSON.stringify(categories));
    alert("Categories saved successfully!");
  };

  return (
    <div>
      <AdminLayout>
        <div className="bg-white lg:h-auto xs:h-full xl:h-[1000px] xs:pl-3 xs:pr-3 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 ">
          <div className="lg:ml-72 justify-center items-center pt-20">
            <h1 className="lg:text-[30px] text-center">Customise Categories</h1>
            <div className="mx-auto px-3 w-[50rem] my-2 py-3">
              {categories.map((category, index) => (
                <div key={index} className="my-2 border-b py-3">
                  <div className="my-2">
                    <label className="font-bold text-lg">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      value={category.name}
                      onChange={(e) =>
                        handleCategoryChange(index, "name", e.target.value)
                      }
                      className="border-[#282B8F] w-full"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="text-red-500 mr-2"
                      onClick={() => handleRemoveCategory(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className="rounded-lg mr-2" onClick={handleAddCategory}>
                  Add Category
                </button>
                <button className="rounded-lg" onClick={handleSave}>
                  Save Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}
