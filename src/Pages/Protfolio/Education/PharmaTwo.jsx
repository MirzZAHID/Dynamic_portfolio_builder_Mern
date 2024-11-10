import React, { useEffect, useState } from "react";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
import main from "../../../images/pharm.jpg";
import user from "../../../images/content.jpg";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About Me", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "Project ", href: "#project", current: false },
];

export default function PharmaTwo(props) {
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

  console.log(workExperience);
  return (
    <div>
      <ProtfolioNavbar
        navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className="bg-black  "
        defaultClass="rounded-full px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass="bg-gray-600  text-black"
        inactiveClass="text-white hover:text-gray-200 n-underline"
      />
      <div
        id="home"
        style={{
          backgroundImage: `url(${
            templateName === "Pharmacist 2" ? storedImage : main
          })`,
          height: "90vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-2">
          <div className="pharm text-white text-center pt-44 xl:text-7xl xs:text-5xl  font-extrabold">
            I am {personalInfo.firstName + " " + personalInfo.lastName}, a
            student
          </div>
          <div className="phar text-white text-center pt-2 xl:text-7xl xs:text-5xl  font-extrabold">
            studying D Pharmacy
          </div>
        </div>
      </div>
      <div id="about">
        <div className="xl:flex lg:flex justify-center mx-5 my-5">
          <div>
            <p className="text-center text-2xl font-extrabold">Education</p>
            {educationInfo.map((edu, index) => {
              return (
                <div className="container">
                  <div className="circle-with-line justify-start px-2 mx-10">
                    <div className="mx-4 my-4">
                      <p className="font-medium">{edu.university}</p>
                      <div className="flex gap-2 p-2 z-10 rounded-md text-black">
                        <p>{edu.domain} </p> |
                        <p>{edu.startYear} </p> -
                        <p>{edu.endYear} </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-center text-2xl font-extrabold">Experience</p>
            <div className="container">
              {workExperience &&
                workExperience.map((work, index) => {
                  return (
                    <div
                      key={index}
                      className="circle-with-line justify-start px-2 mx-10"
                    >
                      <div className="mx-4 my-4">
                        <p className="font-medium">{work.organizationName}</p>
                        <div className="flex gap-2 p-2 z-10 rounded-md text-black">
                          <p>{work.jobTitle} </p> |<p>{work.startYear}</p> -
                          <p>{work.endYear}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black  text-center px-2 py-3">
        <p className="text-center text-white text-2xl font-extrabold py-3">
          Objective
        </p>
        <div className="xl:flex lg:flex md:flex text-center justify-center border-b">
          <div className="mx-2 flex justify-center my-2">
            <img
              src={personalInfo.profileImg}
              alt=""
              className="rounded-3xl h-36 w-36"
            />
          </div>
          <div>
            <p className="w-96 text-start mx-2 text-white">
              {personalInfo.objective}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-3 border-b" id="skills">
        <p className="text-center text-white text-2xl font-extrabold py-3">
          Skills
        </p>

        <div>
          {skills &&
            skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="hover-animation items-center text-white list-[square] text-lg py-2"
                >
                  <li>{skill}</li>
                </div>
              );
            })}
        </div>
      </div>
      <div className="bg-black text-center py-3" id="project">
        <p className="text-center text-white text-2xl font-extrabold py-3">
          Projects
        </p>

        <div class="row align-items-center text-center align-items-center container">
          <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
            {Projects &&
              Projects.map((projects, index) => {
                return (
                  <div className="my-1 align-items-center text-center justify-content-center bg-white md:w-[20rem] rounded-xl shadow-2xl">
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
        className="xl:flex lg:flex md:flex py-2 gap-7 xl:text-lg xs:text-sm justify-center text-black"
        id="contact"
      >
        <p className="text-black font-semibold">Contact Details:</p>
        <p className="text-black font-semibold">
          {personalInfo.firstName + " " + personalInfo.lastName}
        </p>
        <p className="text-black font-semibold">{personalInfo.mobile}</p>
        <p className="text-black font-semibold">{personalInfo.email}</p>
      </div>
    </div>
  );
}
