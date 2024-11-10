import React, { useState, useEffect } from "react";
import main from "../../../images/dev1.jpg";
import secondimg from "../../../images/dev2.png";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About Me", href: "#about", current: false },
];

export default function Computerscience(props) {
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

  console.log(workExperience);
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
        className="bg-blue-950 py-2 border-b "
        defaultClass="rounded-md px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass="bg-pink-800 text-white"
        inactiveClass="text-pink-800 hover:text-white n-underline"
      />

      <div
        style={{
          backgroundImage: `url(${
            templateName === "Computer science 1" ? storedImage : main
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=""
        id="home"
      >
        <div className="bg-blue-950 h-auto flex justify-center gap-6 px-3  text-lg">
          <p className="text-pink-800 hover:text-white cursor-pointer ">
            Empowering innovation through code. We craft solutions that bridge
            imagination with technology, shaping the future one line at a time
          </p>
        </div>
        <div
          className=" bg-blue-950 h-auto content-center mt-24 xl:w-96 lg:w-96 md:w-96  mx-auto px-4 py-6 custom-animation"
          style={{ borderRadius: " 0 30px 0 30px" }}
        >
          <div className=" text-center">
            <span className="text-white text-4xl font-bold italic">
              {personalInfo.firstName} {personalInfo.lastName}
            </span>
            <br />
            <span className="text-gray-100 text-2xl italic">CS student</span>
          </div>
          <div className="text-white text-xl">
            <span className="text-pink-800 font-medium">Email</span>
            <br />
            <span>{personalInfo.email}</span>
            <br />
            <span className="text-pink-800 font-medium">Address: </span>
            <br />
            <span>{personalInfo.address}</span>
            <br />
            <span className="text-pink-800 font-medium">Phone:</span>
            <br />
            <span>{personalInfo.mobile}</span>
            <br />
            <span className="text-pink-800 font-medium">Country:</span>
            <br />
            <span>{personalInfo.country}</span>
            <br />
            <span className="text-pink-800 font-medium">City:</span>
            <br />
            <span>{personalInfo.city}</span>
            <br />
          </div>
        </div>
      </div>
      <div className="bg-blue-950 h-auto p-4" id="about">
        <p className="text-2xl font-semibold text-pink-800">Objective:</p>
        <p className="text-gray-100">{personalInfo.objective}.</p>
      </div>

      <div
        style={{
          backgroundImage: `url(${secondimg})`,
          height: "auto",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=""
      >
        <div
          class="cont h-auto bg-pink-800"
          style={{ borderRadius: "0 0 40px 40px" }}
        >
          <div className="xl:grid xl:grid-cols-2 mx-4">
            <div className="text-start content-start ">
              <h2 class="heading">Experience</h2>
              {workExperience &&
                workExperience.map((work, index) => {
                  return (
                    <div
                      key={index}
                      className="text-white text-lg my-4 px-2 text-start border-l"
                    >
                      <div className="flex justify-start text-start gap-2  text-white">
                        <p className="text-white font-semibold">
                          {work.organizationName}
                        </p>{" "}
                        --{" "}
                        <p className="text-white font-semibold">
                          {work.jobTitle}{" "}
                        </p>
                      </div>
                      <div className="flex justify-start text-start  gap-2 text-white">
                        <p className="text-white"> {work.startYear} </p> -
                        <p className="text-white">{work.endYear}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="text-start content-start ">
              <h2 class="heading">Education</h2>

              {educationInfo.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className="text-white text-lg my-4 px-2 text-start border-l"
                  >
                    <div className="flex justify-start text-start gap-2  text-white">
                      <p className="text-white font-semibold">
                        {edu.university}
                      </p>{" "}
                    </div>
                    <div className="flex justify-start text-start  gap-2 text-white">
                      <p className="text-white font-semibold">{edu.domain} </p>{" "}
                      |<p className="text-white">{edu.startYear}</p> -
                      <p className="text-white">{edu.endYear}</p>
                    </div>
                  </div>
                );
              })}
              <div className="text-white text-lg my-4 px-2 text-start border-l">
                <div className="flex justify-start gap-2 text-white">
                  Skills:
                </div>
                {skills &&
                  skills.map((skill, index) => {
                    return (
                      <ul className="flex justify-start  gap-2 text-white">
                        <li className="text-white">{skill}</li>{" "}
                      </ul>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-blue-950 h-auto p-4"
        id="projects"
        style={{ borderRadius: "40px 40px 0px 0px" }}
      >
        <p className="text-2xl font-semibold text-center text-pink-800">
          Projects:
        </p>
        <div className="md:flex flex-col-1 md:flex-col-2 gap-2 justify-center items-center ">
          {Projects &&
            Projects.map((projects, index) => {
              return (
                <div className="align-items-center text-center justify-content-center bg-gray-500 md:w-[30rem] rounded-xl shadow-2xl">
                  <p className="text-gray-100">{projects.projecName}</p>
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
              );
            })}
        </div>
      </div>
      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='#D53F8C'>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v1.26l-8 4.99-8-4.99V6h16zM4 18V8.41l7.5 4.67.01.01.01-.01 7.5-4.67V18H4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='#D53F8C'>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.53 7 13 7 13s7-8.47 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='#D53F8C'>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 17c-.83 0-1.54-.5-1.84-1.22l-1.52-3.04c-.22-.44-.67-.74-1.18-.74s-.96.3-1.18.74l-1.52 3.04c-.3.61-1.01 1.22-1.84 1.22-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zm-4.5-9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
        </svg>


      </div> */}
    </div>
  );
}
