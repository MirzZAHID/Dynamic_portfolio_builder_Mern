import React, { useEffect, useState } from "react";
import cricket from "../../../images/cricket.jpg";
import ProtfolioNavbar from "../../../Components/ProtfolioNavbar";
const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'project ', href: '#project', current: false },

]
export default function Cricket(props) {
  const personalInfo = props.personalinfo ? props.personalinfo : "";
  const educationInfo = props.educationinfo ? props.educationinfo : "";
  const workExperience = props.workexperience ? props.workexperience : "";
  const skills = props.skills ? props.skills : "";
  const Projects = props.Projects ? props.Projects : "";

  const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current) || null);
  const [templateName, setTemplateName] = useState(null);
  const [storedImage, setStoredImage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("image"));
    if (storedData) {
      setStoredImage(storedData.img);
      setTemplateName(storedData.name);
    }
  }, []);
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <div>
      <ProtfolioNavbar navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className='bg-[#daa520] '
        defaultClass='rounded-full px-3 py-2 text-xl font-medium no-underline hover:no-underline'
        activeClass=' text-white bg-[black]'
        inactiveClass='text-black  n-underline' />
      <div
        style={{
          backgroundImage: `url(${templateName==="Cricket 1"?storedImage:cricket})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class=" align-text-center pt-52 xl:mx-20">
          <main class="maintext">
            <p className=" text-center text-5xl">
              Hello 👋 I'm {personalInfo.firstName} {personalInfo.lastName}{" "}
            </p>
            <div class="patterns flex justify-center">
              <svg width="60%" height="auto">
                <defs>
                  <pattern
                    id="polka-dots"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle fill="black" cx="25" cy="25" r="3"></circle>
                  </pattern>
                  <style>
                    @import url("https://fonts.googleapis.com/css?
                    family=Lora:400,400i,700,700i");
                  </style>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#polka-dots)"
                >
                  {" "}
                </rect>

                <text x="50%" y="100%" text-anchor="middle">
                  Cricketer
                </text>
              </svg>
            </div>
          </main>
        </div>
      </div>
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <div className="align-items-center text-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              About
            </h1>
            {/* <h1 className="position-absolute text-uppercase text-primary">About Me</h1> */}
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid rounded w-100"
                src={personalInfo.profileImg}
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h3 className="mb-4">Cricketer</h3>
              <p>{personalInfo.objective}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="projects">
        <div className="container">
          <div className="align-items-center text-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Projects
            </h1>
            {/* <h1 className="position-absolute text-uppercase text-primary">About Me</h1> */}
          </div>
          <div class="row align-items-center text-center align-items-center container">
            <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
            {Projects && Projects.map((projects, index) => {
              return (
                  <div className='my-1 align-items-center text-center justify-content-center bg-[#c9a033] md:w-[20rem] rounded-xl shadow-2xl'>
                    <p className="text-gray-100 uppercase">{projects.name}</p>
                    <div className="  gap-2 text-black">
                      <div className="flex gap-2 font-semibold mx-2">Url:
                        <p className="text-black ">{projects.url} </p>
                      </div>
                      <div className="flex gap-2 font-semibold mx-2">description:
                        <p className="text-black ">{projects.desc} </p>
                      </div>
                    </div>
                </div>
               )
              })} 
              </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="skills ">
        <div className="container">
          <div className="align-items-center text-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              SKILLS
            </h1>
            {/* <h1 className="position-absolute text-uppercase text-primary">SKILLS</h1> */}
          </div>
          <div class="grid grid-cols-2 justify-center animate__animated animate__fadeInRight mx-auto w-72">
            {skills && skills.map((skill, index) => {
              return (
                <ul key={index} class="list-disc justify-items-center ">
                  <li class="font-weight-bold">{skill}</li>
                </ul>
              );
            })}
          </div>
          <div
            className="py-2 flex  justify-evenly text-white"
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
      </div>
    </div>
  );
}
