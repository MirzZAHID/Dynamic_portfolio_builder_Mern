import React, { useEffect, useState } from "react";
import main from "../../../images/carwash.jpg";
import user from "../../../images/user.png";

export default function Carwasher(props) {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };
  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.Projects ? props.Projects : "";
  const [templateName, setTemplateName] = useState(null);
  const [storedImage, setStoredImage] = useState(null);
  useEffect(() => {
    const img = JSON.parse(localStorage.getItem("image"));
    setTemplateName(img.name);
    setStoredImage(img.img);
  }, []);

  console.log(workExperience);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            templateName === "Car Wash Business 2" ? storedImage : main
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#ff9159] xl:w-[40rem] md:w-[30rem]  h-[100vh]">
          <div className="pt-56">
            <p className="mx-10 xl:text-5xl lg:text-5xl md:text-4xl xs:text-2xl font-semibold italic font-serif">
              Your car deserves the best
            </p>
            <p className="border-l border-black px-4 mx-16 text-xl font-semibold italic font-serif">
              Bringing shine to your ride, one wash at a time
            </p>
          </div>
          <div className="flex justify-evenly mt-44">
            <a
              href="#info"
              className={`border-black  no-underline hover:no-underline text-black font-bold text-xl py-2 px-3 border-[2px] rounded-full ${
                activeTab === "info" ? "bg-[white]" : ""
              }`}
              onClick={() => handleTabClick("info")}
            >
              Information
            </a>
            <a
              href="#resume"
              className={`border-black no-underline hover:no-underline text-black font-bold text-xl py-2 px-3 border-[2px] rounded-full ${
                activeTab === "resume" ? "bg-[white]" : ""
              }`}
              onClick={() => handleTabClick("resume")}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#ff9159] py-2">
        {activeTab === "info" && (
          <div
            className="xl:mx-auto xl:w-[50rem] bg-white lg:mx-auto lg:w-[40rem] md:mx-auto md:w-[40rem]  xs:mx-2 p-4  border-[#ff9159] rounded-3xl border-[3px] shadow-2xl"
            id="info"
          >
            <div className="font-mono my-4 content-center text-center">
              <p className="font-semibold italic text-4xl text-[#ff9159] uppercase">
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
            className="xl:mx-auto xl:w-[50rem] bg-white lg:mx-auto lg:w-[45rem] md:mx-auto md:w-[40rem]  xs:mx-2 p-4 my-2 border-[#ff9159] rounded-3xl border-[3px] shadow-2xl"
            id="resume"
          >
            <div className="font-mono my-4 content-center text-center">
              <p className="font-semibold italic text-4xl text-[#ff9159] uppercase">
                Resume
              </p>
              <div className="xl:flex lg:flex md:flex justify-evenly gap-2 ">
                <div>
                  <p className="font-bold italic text-xl text-[#ff9159] uppercase">
                    Education:
                  </p>
                  {educationInfo.length > 0 &&
                    educationInfo &&
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
                  <p className="font-bold italic text-xl text-[#ff9159] uppercase">
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
                <p className="font-bold italic text-xl text-[#ff9159] uppercase">
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
                <p className="font-bold italic text-xl text-[#ff9159] uppercase">
                  Projects:
                </p>
                <div class="row align-items-center text-center align-items-center container">
                  <div className=" justify-center items-center ">
                    {Projects &&
                      Projects.map((projects, index) => {
                        return (
                          <div className="my-1 align-items-center text-center justify-content-center ">
                            <p className="text-black uppercase  text-center">
                              {projects.projectName}
                            </p>
                            <p className=" font-semibold mx-2 text-center">
                              Url:
                            </p>
                            <p className="text-black   text-center">
                              {projects.projectUrl}{" "}
                            </p>
                            <p className=" font-semibold mx-2 text-center">
                              description:
                            </p>
                            <p className="text-black  text-center ">
                              {projects.desc}{" "}
                            </p>
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
