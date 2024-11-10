import React, { useEffect, useState } from "react";
import main from "../../../images/football.webp";
export default function FootballTwo(props) {
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
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            templateName === "Football 2" ? storedImage : main
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            opacity: "0.8",
            height: "100vh",
          }}
          className="bg-[#31353b]"
        >
          <div class="animated-title">
            <div class="text-top">
              <div>
                <span>Footballer</span>
                <span>Dreams crafted with </span>
              </div>
            </div>
            <div class="text-bottom">
              <div>every dribble</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b py-2">
        <div className="font-mono my-4 content-center xl:w-[50rem] lg:w-[45rem] bg-gray-600 mx-auto p-3 rounded-3xl text-center">
          <p className="text-center text-2xl font-extrabold text-white">
            About{" "}
          </p>
          <div className="flex justify-center text-white">
            <img
              src={personalInfo.profileImg}
              alt="user"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="">
            <div className="flex justify-center gap-2 my-2 text-white">
              <p className="font-medium text-white">Name:</p>
              <p className="text-white">
                {" "}
                {personalInfo.firstName + " " + personalInfo.lastName}
              </p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">Phone:</p>
              <p className="text-white">{personalInfo.mobile}</p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">Email:</p>
              <p className="text-white">{personalInfo.email}</p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">City:</p>
              <p className="text-white">{personalInfo.city}</p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">Country:</p>
              <p className="text-white">{personalInfo.country}</p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">Postal code:</p>
              <p className="text-white">{personalInfo.postalCode}</p>
            </div>
            <div className="flex justify-center gap-2 my-2">
              <p className="font-medium text-white">Address:</p>
              <p className="text-white">{personalInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="xl:flex lg:flex justify-center mx-5 my-5">
          <div>
            <p className="text-center text-2xl font-extrabold">Education</p>
            <div className="container">
              {educationInfo.map((edu, index) => {
                return (
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
                );
              })}
            </div>
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
      <div
        className="xl:flex lg:flex md:flex py-2 gap-7 xl:text-lg xs:text-sm justify-center text-white bg-gray-600"
        id="contact"
      >
        <p className="text-white font-semibold">Contact Details:</p>
        <p className="text-white font-semibold">
          {personalInfo.firstName + " " + personalInfo.lastName}
        </p>
        <p className="text-white font-semibold">{personalInfo.mobile}</p>
        <p className="text-white font-semibold">{personalInfo.email}</p>
      </div>
    </div>
  );
}
