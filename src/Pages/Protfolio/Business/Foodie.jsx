import React, { useEffect, useState } from "react";
import food from "../../../images/foodie.jpg";
import user from "../../../images/user.png";
export default function Foodie(props) {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
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

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            templateName === "Food Business 2" ? storedImage : food
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            opacity: "0.7",
            height: "100vh",
          }}
          className="bg-[#31353b]"
        >
          <div className="foodcontainer">
            <div className="box">
              <div className="title">
                <span className="block"></span>
                <h1>
                  {personalInfo.firstName} {personalInfo.lastName}
                  <span></span>
                </h1>
              </div>
              <div className="role">
                <div className="block"></div>
                <p>Foodie</p>
              </div>
            </div>
          </div>
          <div className=" mx-2 text-center py-2">
            <p className="text-white font-semibold italic  text-2xl">
              Food is not just eating energy. It's an experience.
            </p>
            <p className="text-white font-semibold italic justify-center xl:flex lg:flex md:flex xs:hidden text-2xl">
              Savor every bite, for in the taste of good food lies the essence
              of happiness. Let your palate be your guide to a world of culinary
              delight
            </p>
          </div>
          <div className="flex justify-evenly my-3">
            <a
              href="#info"
              className={`border-[#e9d856] no-underline text-white font-bold text-xl py-2 px-3 border-[1px] rounded-full ${
                activeTab === "info" ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleTabClick("info")}
            >
              Information
            </a>
            <a
              href="#resume"
              className={`border-[#e9d856] no-underline text-white font-bold text-xl py-2 px-3 border-[1px] rounded-full ${
                activeTab === "resume" ? "bg-yellow-500" : ""
              }`}
              onClick={() => handleTabClick("resume")}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div>
        {activeTab === "info" && (
          <div
            className="xl:mx-auto xl:w-[45rem] lg:mx-auto lg:w-[40rem] md:mx-auto md:w-[40rem]  xs:mx-2 p-4 my-2 border-[#e9d856] rounded-3xl border-[3px] shadow-2xl"
            id="info"
          >
            <div className="font-mono my-4 content-center text-center">
              <p className="font-semibold italic text-4xl text-[#e9d856] uppercase">
                Personal Information
              </p>
              <div className="flex justify-center ">
                <img
                  src={personalInfo.profileImg}
                  alt="user"
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <div className="border-b">
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Name:</p>
                  <p>
                    {personalInfo.firstName} {personalInfo.lastName}
                  </p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Phone:</p>
                  <p>{personalInfo.mobile}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Email:</p>
                  <p>{personalInfo.email}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">City:</p>
                  <p>{personalInfo.city}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Country</p>
                  <p>{personalInfo.country}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Postal code:</p>
                  <p>{personalInfo.postalCode}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Address:</p>
                  <p>{personalInfo.address}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                  <p className="font-semibold">Objective:</p>
                  <p>{personalInfo.objective}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "resume" && (
          <div
            className="xl:mx-auto xl:w-[50rem] lg:mx-auto lg:w-[45rem] md:mx-auto md:w-[40rem]  xs:mx-2 p-4 my-2 border-[#e9d856] rounded-3xl border-[3px] shadow-2xl"
            id="resume"
          >
            <div className="font-mono my-4 content-center text-center">
              <p className="font-semibold italic text-4xl text-[#e9d856] uppercase">
                Resume
              </p>
              <div className="xl:flex lg:flex md:flex justify-evenly gap-2 ">
                <div>
                  <p className="font-bold italic text-xl text-[#e9d856] uppercase">
                    Education:
                  </p>

                  {educationInfo &&
                    educationInfo.map((edu, index) => {
                      return (
                        <div
                          key={index}
                          className="border-l border-black px-2 text-black my-2"
                        >
                          <p className="font-bold text-black">
                            {edu.university}
                          </p>
                          <p className="text-black font-medium  flex gap-2">
                            {" "}
                            <p className="text-black font-medium">
                              {edu.domain}
                            </p>{" "}
                            |{" "}
                            <p className="text-black font-medium">
                              {edu.startYear}
                            </p>{" "}
                            -<p className="text-black"> {edu.endYear}</p>
                          </p>
                          <div className="flex "></div>
                        </div>
                      );
                    })}
                </div>
                <div>
                  <p className="font-bold italic text-xl text-[#e9d856] uppercase">
                    Experience:
                  </p>
                  {workExperience &&
                    workExperience.map((work, index) => {
                      return (
                        <div
                          key={index}
                          className="border-l border-black px-2 text-black my-2"
                        >
                          <p className="font-bold text-black">{work.company}</p>
                          <p className="text-black font-medium  flex gap-2">
                            {" "}
                            <p className="text-black font-medium">
                              {work.jobTitle}
                            </p>{" "}
                            |{" "}
                            <p className="text-black font-medium">
                              {work.startYear}{" "}
                            </p>{" "}
                            -<p className="text-black"> {work.endYear}</p>
                          </p>
                          <div className="flex "></div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div>
                <p className="font-bold italic text-xl text-[#e9d856] uppercase">
                  Skills:
                </p>
                {skills &&
                  skills.map((skill, index) => {
                    return (
                      <ul key={index} className="list-disc list-inside ">
                        <li>{skill}</li>
                      </ul>
                    );
                  })}
              </div>
              <div>
                <p className="font-bold italic text-xl text-[#e9d856] uppercase">
                  Projects:
                </p>
                <div class="row align-items-center text-center align-items-center container">
                  <div className=" justify-center items-center ">
                    {Projects &&
                      Projects.map((projects, index) => {
                        return (
                          <div className="my-1 align-items-center text-center justify-content-center bg-[#e9d856] md:w-[20rem] rounded-xl shadow-2xl">
                            <p className="text-black uppercase">
                              {projects.projectName}
                            </p>
                            <div className="  gap-2 text-black">
                              <div className="flex gap-2 font-semibold mx-2">
                                Url:
                                <p className="text-black ">
                                  {projects.projectUrl}{" "}
                                </p>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
