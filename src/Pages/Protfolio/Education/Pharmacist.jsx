import React, { useState, useEffect } from "react";
import main from "../../../images/pharma.webp";
import img from "../../../images/pharm2.webp";
import { PortfolioTemplates } from "../../../PortfolioUtils/Data/Portfolio";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Work experince ", href: "#work", current: false },
  { name: "Education", href: "#edu", current: false },
  { name: "Projects", href: "#Projects", current: false },
];

export default function Pharmacist(props) {
  const [templateName, setTemplateName] = useState(null);
  const [storedImage, setStoredImage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("image"));
    if (storedData) {
      setStoredImage(storedData.img);
      setTemplateName(storedData.name);
    }
  }, []);
  const [currentItem, setCurrentItem] = useState(
    navigation.find((item) => item.current) || null
  );

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.projects ? props.projects : "";
  console.log(educationInfo);
  return (
    <div>
      <ProtfolioNavbar
        navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className="bg-[#272f3b] py-2"
        defaultClass="rounded-md px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass="bg-gray-900 text-white"
        inactiveClass="text-gray-300 hover:bg-gray-700 hover:text-white n-underline"
      />
      <div
        style={{
          backgroundImage: `url(${
            templateName === "Pharmacist 1" ? storedImage : main
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-center "
          id="home"
          style={{
            height: "100vh",
            text: "white",
            backgroundColor: "#343A40",
            opacity: "0.9",
          }}
        >
          <p className="text-white justify-center text-3xl name pt-44 ">
            {personalInfo.firstName} {personalInfo.lastName}
          </p>
          <p className="italic animated text-7xl my-4 ">Pharmacist</p>
          {/* <p className="text-white mt-10"> email@gmail.com</p>
                    <p className="text-white my-2"> 0987644332</p> */}
        </div>
        <div
          className="  content-center mx-auto rounded-lg shadow-2xl xl:w-[50rem]"
          style={{
            position: "relative",
            bottom: "250px",
            background: "rgb(39, 47, 59)",
            height: "300px",
            zIndex: "100",
          }}
        >
          <p className="text-white text-center p-3">About me :</p>
          <p className="text-white text-center p-3">
            o{personalInfo.objective}.
          </p>
        </div>
      </div>
      <div
        id="skills"
        style={{
          backgroundColor: "#343A40",
          opacity: "0.9",
          height: "auto",
        }}
        className="text-center items-center text-white pt-20 "
      >
        <div className="flex justify-center my-2">
          <p className="text-5xl font-extrabold mx-2">1:</p>
          <p className="text-5xl  text-gray-400 uppercase">skills</p>
        </div>
        {skills &&
          skills.map((skill, index) => {
            return (
              <div className="hover-animation items-center list-[square] text-lg py-4">
                <li>{skill} </li>
              </div>
            );
          })}
      </div>
      <div
        id="work"
        style={{
          backgroundColor: "rgb(39, 47, 59)",
          height: "auto",
        }}
        className="text-center items-center text-white py-20"
      >
        <div className="flex justify-center my-2">
          <p className="text-5xl font-extrabold mx-2">2:</p>
          <p className="text-5xl  text-gray-400 uppercase">Work Experience</p>
        </div>
        {workExperience &&
          workExperience.map((work, index) => {
            return (
              <>
                <div className="text-white text-lg py-4 text-center">
                  <div className="flex justify-center  gap-2 text-white">
                    <p className="text-white">{work.jobTitle}</p> ||{" "}
                    <p className="text-white">{work.organizationName} </p>
                  </div>
                  <div className="flex justify-center  gap-2 text-white">
                    <p className="text-white"> {work.startYear}</p> -
                    <p className="text-white">{work.endYear}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div
        id="edu"
        style={{
          backgroundImage: `url(${img})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-center py-10"
          style={{
            height: "100vh",
            text: "white",
            backgroundColor: "#343A40",
            opacity: "0.9",
          }}
        >
          <div className="flex justify-center py-2 ">
            <p className="text-5xl font-extrabold mx-2">3:</p>
            <p className="text-5xl  text-gray-400 uppercase">Education</p>
          </div>
          <div
            className=" mt-20 content-center mx-auto rounded-lg shadow-2xl p-4 xl:w-[50rem] lg:w-[50rem]"
            style={{
              background: "rgb(39, 47, 59)",
              height: "300px",
              zIndex: "100",
            }}
          >
            {educationInfo.map((edu, index) => {
              return (
                <div
                  key={index}
                  className="text-white text-lg my-4 px-2 text-start border-l"
                >
                  <div className="flex justify-start text-start gap-2  text-white">
                    <p className="text-white font-semibold">{edu.university}</p>{" "}
                  </div>
                  <div className="flex justify-start text-start  gap-2 text-white">
                    <p className="text-white font-semibold">{edu.domain} </p> |
                    <p className="text-white">{edu.startYear}</p> -
                    <p className="text-white">{edu.endYear}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        id="Projects"
        className="text-center py-10"
        style={{
          height: "auto",
          text: "white",
          backgroundColor: "#343A40",
          opacity: "0.9",
        }}
      >
        <div className="flex justify-center py-2 ">
          <p className="text-5xl font-extrabold mx-2">4:</p>
          <p className="text-5xl  text-gray-400 uppercase">Projects</p>
        </div>
        {Projects &&
          Projects.map((projects, index) => {
            return (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2 justify-center content-center items-center ">
                <div
                  className=" my-2 content-center mx-auto rounded-lg shadow-2xl p-4 h-auto xl:w-[30rem] lg:w-[30rem]"
                  style={{
                    background: "rgb(39, 47, 59)",
                    height: "300px",
                    zIndex: "100",
                  }}
                >
                  <div className="text-white text-lg my-4 px-2 text-start ">
                    <div className="flex  gap-2  text-white">
                      <p className="text-white font-semibold text-center">
                        {projects.projectName}
                      </p>
                    </div>
                    <div className="  gap-2 text-white">
                      <div className="flex gap-2 font-semibold">
                        Url:
                        <p className="text-white "> {projects.projectUrl}</p>
                      </div>
                      <div className="flex gap-2 font-semibold">
                        description:
                        <p className="text-white "> {projects.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
        className="py-2 flex  justify-between text-white"
        style={{ backgroundColor: "rgb(39, 47, 59)" }}
      >
        <div className="flex">
          <p className="text-white mx-2">
            {personalInfo.firstName + " " + personalInfo.lastName}
          </p>{" "}
          | <p className="text-white mx-2">{personalInfo.address}</p>
        </div>
        <div className="flex ">
          <p className="text-white mx-2">{personalInfo.email}</p> |{" "}
          <p className="text-white mx-2">{personalInfo.mobile}</p>
        </div>
      </div>
    </div>
  );
}
