import React, { useEffect, useState } from "react";
import carwash from "../../../images/car.jpg";
import wash from "../../../images/wash.webp";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Work experince ", href: "#work", current: false },
  { name: "Education", href: "#edu", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "project ", href: "#project", current: false },
];
export default function Carwash(props) {
  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.projects ? props.projects : "";

  const [currentItem, setCurrentItem] = useState(
    navigation.find((item) => item.current) || null
  );
  const [templateName, setTemplateName] = useState(null);
  const [storedImage, setStoredImage] = useState(null);
  useEffect(() => {
    const img = JSON.parse(localStorage.getItem("image"));
    setTemplateName(img.name);
    setStoredImage(img.img);
  }, []);
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };
  return (
    <div>
      <ProtfolioNavbar
        navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className="bg-red-950 py-2"
        defaultClass="rounded-md px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass="bg-white text-red-950 "
        inactiveClass="text-white hover:text-white n-underline"
      />
      <div
        style={{
          // backgroundImage: `url(${
          //  carwash
          // })`,
          backgroundImage: `url(${
            templateName === "Car Wash Business 1" ? storedImage : carwash
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        id="home"
      >
        <div className="mx-auto container text-center pt-44">
          <p className="text-red-950 font-medium text-5xl animate-pulse">
            Washing & detailing{" "}
          </p>
          <p className="text-black text-7xl font-bold italic animate-bounce">
            Quality service for you
          </p>
          <p className="text-gray-900 text-xl font-semibold animate-fadeIn">
            With meticulous attention to detail, we strive to exceed your
            expectations, delivering unparalleled quality and service that
            leaves a lasting impression.
          </p>
        </div>
      </div>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded w-100" src={wash} alt="" />
            </div>
            <div className="col-lg-7">
              <h1 className="text-3xl font-bold text-red-950 relative">
                About
                <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-red-950 animate-pulse"></span>
              </h1>

              <p>{personalInfo.objective}</p>

              <ol className="list-disc text-red-950 font-medium">
                <li className="flex items-center">
                  <span className="mr-2">&#10003;</span> Seats washing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#10003;</span> Vacuum cleaning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#10003;</span> Interior wet cleaning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">&#10003;</span> Window wiping
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="skills">
        <div className="container">
          <h1 className="text-3xl font-bold text-red-950 relative">
            What i do?
            <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-red-950 animate-pulse"></span>
          </h1>
          <div class="grid grid-cols-2 justify-center animate__animated animate__fadeInRight mx-auto w-72">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <ul key={index} class="list-disc justify-items-center ">
                    <li class="font-weight-bold">{skill} </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-12" id="work">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-red-950 relative mb-4">
            Experience
            <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-red-950 animate-pulse"></span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperience &&
              workExperience.map((work, index) => {
                return (
                  <div className="experience-item">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {work.jobTitle}
                    </h3>
                    <p className="text-white mb-4">{work.organizationName}</p>
                    <p className="text-white ">
                      Started at: <p className="text-white">{work.startYear}</p>
                    </p>
                    <p className="text-white ">
                      Ended at: <p className="text-white">{work.endYear}</p>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12" id="edu">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-red-950 relative mb-4">
            Education
            <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-red-950 animate-pulse"></span>
          </h1>
          {educationInfo.map((educate,index)=>{
            return(

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-[1px] p-2 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {educate.domain}{" "}
              </h3>
              <p className="text-black mb-4">{educate.university}</p>
              <p className="text-black ">
                Started at:{" "}
                <p className="text-black">{educate.startYear}</p>
              </p>
              <p className="text-black ">
                Ended at: <p className="text-black">{educate.endYear}</p>
              </p>
            </div>
          </div>
            )
          })}
        </div>
      </section>
      <div className="container my-3" id="project">
        <h1 className="text-3xl font-bold text-red-950 relative mb-4">
          Projects
          <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-red-950 animate-pulse"></span>
        </h1>
        <div class="row align-items-center text-center align-items-center container">
          <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
            {Projects &&
              Projects.map((projects, index) => {
                return (
                  <div className="my-1 align-items-center text-center justify-content-center bg-gray-100 md:w-[20rem] rounded-xl shadow-2xl">
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
          width: "full",
        }}
        className="bg-red-950 px-4 py-2 h-auto "
        id="contact"
      >
        <div className="xl:flex lg:flex md:flex text-center gap-7 xl:text-lg xs:text-sm justify-center ">
          <p className="text-white font-semibold ">Contact Details:</p>
          <p className="text-white font-semibold ">
            {personalInfo.firstName} {personalInfo.lastName}
          </p>
          <p className="text-white font-semibold ">{personalInfo.mobile}</p>
          <p className="text-white font-semibold ">{personalInfo.email}</p>
        </div>
      </div>
    </div>
  );
}
