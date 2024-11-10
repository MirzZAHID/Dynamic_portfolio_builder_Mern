import React, { useEffect, useState } from "react";
import food from "../../../images/food.jpg";
import food2 from "../../../images/food2.jpg";
import food3 from "../../../images/food3.jpg";
import food4 from "../../../images/food4.webp";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About me", href: "#about", current: false },
  { name: "Objective ", href: "#obj", current: false },
  { name: "Project ", href: "#project", current: false },
];
export default function Food(props) {
  const [templateName, setTemplateName] = useState(null);
  const [storedImage, setStoredImage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("image"));
    if (storedData) {
      setStoredImage(storedData.img);
      setTemplateName(storedData.name);
    }
  }, []);
  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.projects ? props.projects : "";

  const [currentItem, setCurrentItem] = useState(
    navigation.find((item) => item.current) || null
  );

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };
  return (
    <div>
      <ProtfolioNavbar
        navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className="bg-[#757575] py-2"
        defaultClass="rounded-md px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass=" text-white"
        inactiveClass="text-black  n-underline"
      />
      <div
        style={{
          backgroundImage: `url(${
            templateName === "Food Business 1" ? storedImage : food
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=""
        id="home"
      >
        <div
          style={{
            backgroundColor: "#757575",
            opacity: "0.6",
            height: "100vh",
          }}
          className="mx-auto xl:w-[50rem] lg:w-[50rem] md:w-[40rem] xs:w-auto p-4"
        >
          <div className="text-center mx-auto pt-10">
            <div class="typewriter">
              <p className="text-black text-2xl xl:text-3xl xs:text-base font-bold pt-2">
                Organic Food is good for health{" "}
              </p>
            </div>
            <p className="text-black font-medium my-2 py-3">
              Crafting culinary experiences with passion and flavor. From
              farm-fresh ingredients to gourmet delights, we redefine dining
              excellence
            </p>
            <div className="container text-black font-medium pt-10 border-t">
              <p className="text-black font-medium">
                Name: {personalInfo.firstName + " " + personalInfo.lastName}
              </p>

              <p className="text-black font-medium">Profile: Food Chef</p>

              <p className="text-black font-medium">
                Email: {personalInfo.email}
              </p>

              <p className="text-black font-medium">
                Phone: {personalInfo.mobile}
              </p>
              <p className="text-black font-medium">
                Address: {personalInfo.address}
              </p>
              <p className="text-black font-medium">
                City: {personalInfo.city}
              </p>
              <p className="text-black font-medium">
                Country: {personalInfo.country}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="obj">
        <div className="container my-5 h-auto">
          <div className="flex  justify-center items-center my-2">
            <div className="grid grid-cols-2 gap-1 col-lg-4">
              <img
                src={food}
                className="rounded-lg shadow-lg hover:shadow-xl h-44 w-44 transform transition duration-300 hover:scale-105"
                alt="Food"
              />
              <img
                src={food3}
                className="rounded-lg shadow-lg hover:shadow-xl h-44 w-44 transform transition duration-300 hover:scale-105"
                alt="Food"
              />
              <img
                src={food4}
                className="rounded-lg shadow-lg hover:shadow-xl h-44 w-44 transform transition duration-300 hover:scale-105"
                alt="Food"
              />
              <img
                src={food2}
                className="rounded-lg shadow-lg hover:shadow-xl h-44 w-44 transform transition duration-300 hover:scale-105"
                alt="Food"
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Objective</h3>
              <p>{personalInfo.objective}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" container py-3 h-auto xl:flex lg:flex mx-auto justify-center "
        id="project"
      >
        <div>
          <p
            className="text-gray-500 text-3xl font-bold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Experience
          </p>

          <div className="container">
            {workExperience &&
              workExperience.map((work, index) => {
                return (
                  <div
                    key={index}
                    className="circle-with-line justify-start px-2 mx-10"
                  >
                    <div className="mx-4 my-4">
                      <p>{work.organizationName}</p>
                      <div className="flex gap-2 p-2 z-10 rounded-md text-black">
                        <p>{work.jobTitle}</p> |<p>{work.startYear}</p> -
                        <p>{work.endYear}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <p
            className="text-gray-500 text-3xl font-bold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Education
          </p>
          {educationInfo.map((edu, index) => {
            return (
              <div className="circle-with-line justify-start px-2 mx-10">
                <div className="mx-4 my-4">
                  <p>{edu.university}</p>
                  <div className="flex gap-2 p-2  rounded-md text-black">
                    <p>{edu.domain}</p>|
                    <p>{edu.startYear}</p> -
                    <p>{edu.endYear}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container my-10">
        <div className="align-items-center text-center justify-content-center">
          <p
            className="text-gray-500 text-3xl font-bold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Projects
          </p>
        </div>
        <div class="row align-items-center text-center align-items-center container">
          <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
            {Projects &&
              Projects.map((projects, index) => {
                return (
                  <div className="my-1 align-items-center text-center justify-content-center bg-gray-600 md:w-[20rem] rounded-xl shadow-2xl">
                    <p className="text-black uppercase">
                      {projects.projectName}
                    </p>
                    <div className="  gap-2 text-black">
                      <div className="flex gap-2 font-semibold mx-2">
                        Url:
                        <p className="text-black ">{projects.projectUrl} </p>
                      </div>
                      <div className="flex gap-2 font-semibold mx-2">
                        description:
                        <p className="text-black ">{projects.desc} </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#757575",
          opacity: "0.6",
          width: "full",
        }}
        className=" px-4 py-2 xl:h-[10vh] xs:h-[auto] lg:h-[10vh] "
      >
        <div className="xl:flex lg:flex md:flex  gap-7 xl:text-lg xs:text-sm justify-center text-black">
          <p className="text-black font-semibold">Contact Details:</p>
          <p className="text-black font-semibold">
            {personalInfo.firstName} {personalInfo.lastName}
          </p>
          <p className="text-black font-semibold">{personalInfo.mobile}</p>
          <p className="text-black font-semibold">{personalInfo.email}</p>
        </div>
      </div>
    </div>
  );
}
