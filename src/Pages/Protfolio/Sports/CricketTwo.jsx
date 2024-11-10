import React from "react";
import main from "../../../images/cric.webp";
import user from "../../../images/user.png";

export default function CricketTwo(props) {
  const personalInfo = props.personalinfo || {};
  const educationInfo = props.educationinfo || [];
  const workExperience = props.workexperience || [];
  const skills = props.skills || [];
  const projects = props.projects || [];

  return (
    <div>
      <div className="font-mono my-4 content-center xl:w-[50rem] lg:w-[45rem] mx-auto bg-green-800 p-3 text-center">
        <div className="flex justify-center">
          <img
            src={personalInfo.profileImg || user}
            alt="user"
            className="h-20 w-20 rounded-full"
          />
        </div>
        <div>
          {personalInfo && (
            <>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Name:</p>
                <p>{`${personalInfo.firstName || ''} ${personalInfo.lastName || ''}`}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Phone:</p>
                <p>{personalInfo.mobile || ''}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Email:</p>
                <p>{personalInfo.email || ''}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">City:</p>
                <p>{personalInfo.city || ''}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Country:</p>
                <p>{personalInfo.country || ''}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Postal code:</p>
                <p>{personalInfo.postalCode || ''}</p>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <p className="font-semibold">Address:</p>
                <p>{personalInfo.address || ''}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex justify-center gap-2 my-2">
          <p className="font-semibold text-black">Objective:</p>
          <p>{personalInfo.objective || ''}</p>
        </div>
        <div className="text-center">
          <p className="font-bold italic text-xl text-[black] uppercase">Skills:</p>
          {skills.length > 0 && (
            <ul className="list-disc list-inside">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <section className="bg-green-900 py-12" id="edu">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-black relative mb-4">Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationInfo.length > 0 && educationInfo.map((edu, index) => (
              <div key={index} className="border-[1px] bg-gray-100 p-2 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.domain}</h3>
                <p className="text-black mb-4">{edu.university}</p>
                <p className="text-black flex mx-1">Started at: <span className='text-black'>{edu.startYear}</span></p>
                <p className="text-black flex mx-1">Ended at: <span className='text-black'>{edu.endYear}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" id="work">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-black relative mb-4">Experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperience.length > 0 && workExperience.map((work, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-black mb-2">{work.jobTitle}</h3>
                <p className="text-black mb-4">{work.company}</p>
                <p className="text-black flex">Started at: <span className='text-black mx-1'>{work.startYear}</span></p>
                <p className="text-black flex">Ended at: <span className='text-black mx-1'>{work.endYear}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 py-12" id="project">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-black relative mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.length > 0 && projects.map((project, index) => (
              <div key={index} className="my-1 align-items-center text-center justify-content-center bg-gray-100 md:w-[20rem] rounded-xl shadow-2xl">
                <p className="text-black uppercase">{project.projectName}</p>
                <div className="gap-2 text-black">
                  <div className="flex gap-2 font-semibold mx-2">Url:
                    <span className="text-black">{project.projectUrl}</span>
                  </div>
                  <div className="flex gap-2 font-semibold mx-2">Description:
                    <span className="text-black">{project.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
