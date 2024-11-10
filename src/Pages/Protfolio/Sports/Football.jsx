import React, { useEffect, useState } from "react";
import img from "../../../images/img.jpeg";
import football from "../../../images/football.webp";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About me", href: "#qualification", current: false },
  { name: "skills ", href: "#skill", current: false },
  { name: "project ", href: "#project", current: false },
];
export default function Football(props) {
  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.Projects ? props.Projects : "";
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
        className="bg-[white] py-2 sticky "
        defaultClass="rounded-md px-3 py-2 text-xl font-medium no-underline hover:no-underline"
        activeClass="bg-[#0d6efd] text-white"
        inactiveClass="text-black n-underline"
      />

      <div
        class="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        style={{ minHeight: "100vh" }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img
                class="img-fluid w-100 rounded-circle shadow-sm"
                src={personalInfo.profileImg}
                alt=""
              />
            </div>
            <div class="col-lg-7 inline text-center text-lg-center">
              <h3 className="mb-10 xl:text-9xl">I'm</h3>
              <div className="my-2 mt-3">
                <span className="span  mt-50">
                  {personalInfo.firstName} {personalInfo.lastName}{" "}
                </span>
              </div>
              <div className="mt-20 italic text-xl">"soccer player"</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              About Me
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid rounded w-100" src={football} alt="" />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Footballer</h3>
              <p>{personalInfo.objective}</p>
              <div className="row mb-3">
                <div className="col-sm-6 py-2">
                  <h6>
                    Name:{" "}
                    <span className="text-secondary">
                      {personalInfo.firstName} {personalInfo.lastName}
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Address:{" "}
                    <span className="text-secondary">
                      {personalInfo.address}
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    City:{" "}
                    <span className="text-secondary">{personalInfo.city}</span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Country:{" "}
                    <span className="text-secondary">
                      {personalInfo.country}
                    </span>
                  </h6>
                </div>
                <div className="col-sm-6 py-2">
                  <h6>
                    Postal code:{" "}
                    <span className="text-secondary">
                      {personalInfo.postalCode}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Quality
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Education & Experience
            </h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              {educationInfo.map((edu,index)=>{
                return(

              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i
                    className="far fa-dot-circle text-primary position-absolute"
                    style={{ top: "2px", left: "-32px" }}
                  ></i>
                  <h5 className="font-weight-bold mb-1">
                    {edu.domain}
                  </h5>
                  <p className="mb-2">
                    <strong>{edu.university}</strong> |{" "}
                    <small>
                      {edu.startYear} - {edu.endYear}
                    </small>
                  </p>
                </div>
              </div>
                )
              })}
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Experience</h3>
              {workExperience &&
                workExperience.map((work, index) => {
                  return (
                    <div
                      key={index}
                      className="border-left border-primary pt-2 pl-4 ml-2"
                    >
                      <div className="position-relative mb-4">
                        <i
                          className="far fa-dot-circle text-primary position-absolute"
                          style={{ top: "2px", left: "-32px" }}
                        ></i>
                        <h5 className="font-weight-bold mb-1">
                          {work.jobTitle}
                        </h5>
                        <p className="mb-2">
                          <strong>Soft Company</strong> |{" "}
                          <small>
                            {work.startYear} - {work.endYear}
                          </small>
                        </p>
                      </div>
                      {/* Add more experience entries here if needed */}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-5" id="skill">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
              class="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              {" "}
              Skills
            </h1>
            <h1 class="position-absolute text-uppercase text-primary">
              My Skills
            </h1>
          </div>
          <div class="row align-items-center text-center align-items-center container">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <div key={index} class="col-md-6">
                    <h6 class="font-weight-bold  fa-dot-circle text-primary">
                      {skill}
                    </h6>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div class="container-fluid py-5" id="project">
        <div class="container">
          <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
              class="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              {" "}
              Projects
            </h1>
            <h1 class="position-absolute text-uppercase text-primary">
              My Projects
            </h1>
          </div>
          <div class="row align-items-center text-center align-items-center container">
            <div class="row align-items-center text-center align-items-center container">
              {Projects &&
                Projects.map((projects, index) => {
                  return (
                    <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
                      <div className="my-1 align-items-center text-center justify-content-center bg-[#1975fd] md:w-[20rem] rounded-xl shadow-2xl">
                        <p className="text-gray-100 uppercase">
                          {projects.name}
                        </p>
                        <div className="  gap-2 text-black">
                          <div className="flex gap-2 font-semibold mx-2">
                            Url:
                            <p className="text-black ">{projects.url} </p>
                          </div>
                          <div className="flex gap-2 font-semibold mx-2">
                            description:
                            <p className="text-black ">{projects.desc} </p>
                          </div>
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
  );
}
