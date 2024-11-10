import React, { useEffect, useState, useRef } from "react";
import AdminLayout from "../Layouts/AdminLayout";
import { Grid3x3 } from "@mui/icons-material";

export default function CustomizeContent() {
  const [formData, setFormData] = useState({
    mainHeading: null,
    mainHeadingText: null,
    firstButtonText: null,
    secMainHeading: null,
    cardsStep1Heading: null,
    cardsStep2Heading: null,
    cardsStep3Heading: null,
    cardsStep4Heading: null,
    cardsStep5Heading: null,
    cardsStep6Heading: null,
    cardsStep1Text: null,
    cardsStep2Text: null,
    cardsStep3Text: null,
    cardsStep4Text: null,
    cardsStep5Text: null,
    cardsStep6Text: null,
    thirdMainHeading: null,
    cardsTwoStep1Heading: null,
    cardsTwoStep2Heading: null,
    cardsTwoStep3Heading: null,
    cardsTwoStep1Text: null,
    cardsTwoStep1Text: null,
    cardsTwoStep1Text: null,
    secondButtonText: null,
    fourthMainHeading: null,
    cards3Step1Heading: null,
    cards3Step2Heading: null,
    cards3Step3Heading: null,
    cards3Step1Text: null,
    cards3Step2Text: null,
    cards3Step3Text: null,
    lastHeading: null,
    lastText: null,
    lastButton: null,
  });
  console.log(formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!value.trim()) {
      alert(`"${name}" cannot be empty`);
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const saveFormDataToLocalStorage = () => {
    // Retrieve existing versions from local storage or initialize an empty array
    for (const key in formData) {
      if (!formData[key]) {
        alert(`${key.replace(/([A-Z])/g, " $1").trim()} cannot be empty`);
        return; // Stop execution if any field is empty
      }
    }
    let existingVersions = JSON.parse(localStorage.getItem("versions")) || [];

    // Append current form data to the versions array
    existingVersions.push(formData);

    // Keep only the last two objects in the versions array
    if (existingVersions.length > 2) {
      existingVersions = existingVersions.slice(-2);
    }

    // Store the updated versions array back into local storage
    localStorage.setItem("versions", JSON.stringify(existingVersions));
    alert(
      "Your customisation is set now click on the provided buttons to apply"
    );
    window.location.reload();
  };
  const versions = JSON.parse(localStorage.getItem("versions"));
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      setVersion(versions);
    }
  }, [versions]);

  const [version, setVersion] = useState([null]);
  const [imageURL, setImageURL] = useState(null); // Add a state for the image URL
  const [templateName, setTemplateName] = useState(null);
  const convertToBase64 = (newFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(newFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    convertToBase64(file).then((res)=>setImageURL(res))
    // setImageURL(base64);
    // if (file) {
    //   const url = URL.createObjectURL(file);
    // }
  };
  const handleSubmit = () => {
    const data = {
      name: templateName,
      img: imageURL,
    };
    localStorage.setItem("image", JSON.stringify(data));
    alert("Submitted")
  };
  return (
    <div>
      <AdminLayout>
        <div className="bg-[white] lg:h-auto xs:h-full xl:h-[1000px] xs:pl-3 xs:pr-3 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 ">
          <div>
            <div className="lg:ml-72 justify-center items-center pt-20 ">
              <h1 className="lg:text-[30px]  text-center ">
                Customize your Content
              </h1>
              {version && version.length > 0 && version.length < 2 && (
                <div className="flex justify-center items-center">
                  <button
                    className=" rounded-lg"
                    onClick={() => {
                      localStorage.setItem("vN", 0);
                      alert("Set Successfully");
                    }}
                  >
                    Set Version
                  </button>
                </div>
              )}
              {version && version.length > 1 && (
                <div className="flex ml-60 space-x-20">
                  <button
                    className=" rounded-lg"
                    onClick={() => {
                      localStorage.setItem("vN", 0);
                      alert("Set Successfully");
                    }}
                  >
                    Set Previous Version
                  </button>
                  <button
                    className=" rounded-lg"
                    onClick={() => {
                      localStorage.setItem("vN", 1);
                      alert("Set Successfully");
                    }}
                  >
                    Set Latest Version
                  </button>
                </div>
              )}
              <div className=" mx-auto px-3 w-[50rem] my-2 py-3">
                <div className="my-2 border-b">
                  <div className="my-2 ">
                    <label for="text-input" className="font-bold text-lg">
                      Main Heading:
                    </label>
                    <input
                      name="mainHeading"
                      onChange={handleChange}
                      type="text"
                      className="border-[#282B8F] "
                    />
                  </div>
                  <div className="my-2">
                    <label for="text-input " className="text-base font-medium">
                      {" "}
                      Main heading related text:
                    </label>
                    <input
                      type="text"
                      name="mainHeadingText"
                      onChange={handleChange}
                      className="border-[#282B8F] "
                    />
                    <input
                      type="text"
                      name="firstButtonText"
                      onChange={handleChange}
                      placeholder="Create Portfolio button "
                      className="rounded-full border-[#282B8F] my-2 px-3  w-52"
                    />
                  </div>
                </div>
                <div className="my-2 border-b py-3">
                  <label for="text-input" className="font-bold text-lg">
                    {" "}
                    Features Designed to Help You Win Your Dream Job ````Main
                    Heading````:
                  </label>
                  <input
                    type="text"
                    name="secMainHeading"
                    onChange={handleChange}
                    className="border-[#282B8F] "
                  />
                  <div className="flex flex-col-3 gap-3 ">
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 1:</label>
                      <input
                        type="text"
                        name="cardsStep1Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep1Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 2:</label>
                      <input
                        type="text"
                        name="cardsStep2Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep2Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 3:</label>
                      <input
                        type="text"
                        name="cardsStep3Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep3Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-col-3 gap-3">
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 4:</label>
                      <input
                        type="text"
                        name="cardsStep4Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep4Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 5:</label>
                      <input
                        type="text"
                        name="cardsStep5Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep5Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 6:</label>
                      <input
                        type="text"
                        name="cardsStep6Heading"
                        onChange={handleChange}
                        placeholder=" heading"
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        name="cardsStep6Text"
                        onChange={handleChange}
                        cols="50"
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="my-2 border-b py-3">
                  <label for="text-input" className="font-bold text-lg">
                    3 Steppers How to create your protfilio heading
                  </label>
                  <input
                    type="text"
                    name="thirdMainHeading"
                    onChange={handleChange}
                  />
                  <div className="flex flex-col-3 gap-3">
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 1:</label>
                      <input
                        type="text"
                        placeholder=" heading"
                        name="cardsTwoStep1Heading"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        cols="50"
                        name="cardsTwoStep1Text"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 2:</label>
                      <input
                        type="text"
                        placeholder=" heading"
                        name="cardsTwoStep2Heading"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        cols="50"
                        name="cardsTwoStep2Text"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <label>Step 3:</label>
                      <input
                        type="text"
                        placeholder=" heading"
                        name="cardsTwoStep3Heading"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      />
                      <textarea
                        rows="4"
                        cols="50"
                        name="cardsTwoStep3Text"
                        onChange={handleChange}
                        className="border-[#282B8F] "
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Create Portfolio button"
                    name="secondButtonText"
                    onChange={handleChange}
                    className="rounded-full my-2 px-3 border-[#282B8F] w-52"
                  />
                </div>
                <div>
                  <label for="text-input" className="font-bold text-lg">
                    Featured Templates heading
                  </label>
                  <input
                    type="text"
                    name="fourthMainHeading"
                    onChange={handleChange}
                  />
                  <div className="flex flex-col-3 gap-3">
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <input
                        type="text"
                        name="cards3Step1Heading"
                        onChange={handleChange}
                        placeholder=" heading one"
                        className="my-1"
                      />
                      <input
                        type="text"
                        placeholder=" txt one"
                        name="cards3Step1Text"
                        onChange={handleChange}
                        className="my-1"
                      />
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <input
                        type="text"
                        name="cards3Step2Heading"
                        onChange={handleChange}
                        placeholder=" heading one"
                        className="my-1"
                      />
                      <input
                        type="text"
                        placeholder=" txt one"
                        name="cards3Step2Text"
                        onChange={handleChange}
                        className="my-1"
                      />
                    </div>
                    <div className="rounded-xl my-2 bg-gray-100 p-3">
                      <input
                        type="text"
                        name="cards3Step3Heading"
                        onChange={handleChange}
                        placeholder=" heading one"
                        className="my-1"
                      />
                      <input
                        type="text"
                        placeholder=" txt one"
                        name="cards3Step3Text"
                        onChange={handleChange}
                        className="my-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="my-2 border-b">
                  <div className="my-2 ">
                    <label for="text-input" className="font-bold text-lg">
                      last Heading:
                    </label>
                    <input
                      type="text"
                      name="lastHeading"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-2">
                    <label for="text-input" className="text-base font-medium">
                      {" "}
                      last heading related text:
                    </label>
                    <input
                      type="text"
                      name="lastText"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="lastButton"
                      onChange={handleChange}
                      placeholder="Create Portfolio button "
                      className="rounded-full border-[#282B8F] my-2 px-3  w-52"
                    />
                  </div>
                </div>

                
                
                <div className="flex justify-center items-center">
                  <button
                    className=" rounded-lg"
                    onClick={saveFormDataToLocalStorage}
                  >
                    Save
                  </button>
                </div>
              <div>
                <h2 className="mt-5">Customise Background Images</h2>
              </div>
              <div>
          <label>Template Name(you want to change background except "Football 1" and "Computer science 2")</label>
          <input
            type="text"
            className="mb-8"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
          <input type="file" onChange={handleFileChange} />
          <div className="flex justify-center items-center mt-5">
            <button onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}
