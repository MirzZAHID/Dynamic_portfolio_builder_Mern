import React, { useEffect, useState } from "react";
import babar from "../../../images/stadium.jpg";
import babar3 from "../../../images/babar1.jpeg";
import babar2 from "../../../images/cric.jpeg";
import babar4 from "../../../images/babar2.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SpecialTemp(props) {
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
  const settings = {
    dots: true,
    arrows: true, // Ensure arrows are enabled
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
            templateName === "Cricket 3" ? storedImage : babar
          })`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div class="sign xs:text-4xl xl:text-9xl">
            <span class="fast-flicker xs:text-4xl xl:text-9xl">
              {personalInfo.firstName}
            </span>
            <span class="flicker mx-3 xs:text-4xl xl:text-9xl">
              {" "}
              {personalInfo.lastName}
            </span>
          </div>
        </div>
        <div className="w-96 mx-auto pt-4">
          <Slider {...settings}>
            <div>
              <img src={babar3} alt="Slide 1" className="h-52 w-96" />
            </div>
            <div>
              <img src={babar2} alt="Slide 2" className="h-52 w-96" />
            </div>
            <div>
              <img src={babar4} alt="Slide 3" className="h-52 w-96" />
            </div>
          </Slider>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        }}
      >
        <div className="mx-auto xl:mx-auto xl:w-[50rem]  lg:mx-auto lg:w-[40rem] md:mx-auto md:w-[40rem]  xs:mx-2 p-4 ">
          <div className="stylish-heading ">
            <div className="font-mono my-4 content-center text-center">
              <h1>About Me</h1>
              <div className="flex justify-center ">
                <img
                  src={personalInfo.profileImg}
                  alt="user"
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <div className="border-b text-lg ">
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
        </div>
      </div>
      <div
        // style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`}}
        className="bg-gray-300"
      >
        <div className="stylish-heading">
          <h1>Stats</h1>
        </div>
        <div className="flex justify-evenly pb-4">
          <div className="text-center">
            <h2 className=" stylish-heading text-lg ">Format</h2>
            {workExperience.map((item, index) => (
              <div className=" font-bold text-lg mt-2">
                {item.format ?? item.format}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className=" stylish-heading text-lg ">Innings Played</h2>
            {workExperience.map((item, index) => (
              <div className=" font-bold text-lg mt-2">
                {item.innings ?? item.innings}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className=" stylish-heading text-lg ">Total Score</h2>
            {workExperience.map((item, index) => (
              <div className=" font-bold text-lg mt-2">
                {item.score ?? item.score}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className=" container py-3 h-auto xl:flex lg:flex mx-auto justify-center "
        id="about"
      >
        {/* <div>
                    <div className='stylish-heading'>
                        <h1
                            className=""
                        >
                            Experience
                        </h1>

                    </div>
                    <div className="container">
                        <div className="circle-with-line justify-start px-2 mx-10">
                            <div className="mx-4 my-4">
                                <p>org name </p>
                                <div className="flex gap-2 p-2 z-10 rounded-md text-black">
                                    <p>title</p> |<p>start</p> -<p>end</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="">
          <div className="stylish-heading">
            <h1 className="">Education</h1>
          </div>
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
    </div>
  );
}
