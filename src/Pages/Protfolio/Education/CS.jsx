import React, { useState } from 'react'
import ProtfolioNavbar from '../../../Components/ProtfolioNavbar'
import main from '../../../images/comp.jpg'
const navigation = [
  { name: 'About Me', href: '#home', current: true },
  { name: 'Resume', href: '#resume', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Contact', href: '#contact', current: false },
  { name: 'Project ', href: '#project', current: false },

]

export default function CS(props) {
  
  const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current) || null);

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
      <ProtfolioNavbar navigation={navigation}
        currentItem={currentItem}
        handleItemClick={handleItemClick}
        className='bg-[#0e3f6c] '
        defaultClass='rounded-full px-3 py-2 text-xl font-medium no-underline hover:no-underline'
        activeClass='bg-white text-black'
        inactiveClass='text-white  n-underline' />
      <div id="home">
        <div>
          <p className='cs '>CS student</p>
        </div>

        <div className='border-[#0e3f6c] border-[2px]  mt-72 mb-3 xl:mx-auto xl:w-[40rem] lg:mx-auto lg:w-[40rem] xs:mx-4 rounded-sm shadow p-4'>
          <div className=''>
            <p className='twelve '>Objective</p>
            <p>{personalInfo.objective}</p>
          </div>
          <div>
            <p className='twelve'>Personal Information</p>
            <div className='xl:flex  lg:flex md:flex justify-evenly gap-4 mx-2 '>
              <div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>Name:</p>
                  <p>{personalInfo.firstName} {personalInfo.lastName}</p>
                </div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>Email:</p>
                  <p>{personalInfo.email}</p>
                </div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>City:</p>
                  <p>{personalInfo.city}</p>
                </div>
              </div>
              <div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>Phone:</p>
                  <p>{personalInfo.mobile}</p>
                </div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>Country:</p>
                  <p>{personalInfo.country}</p>
                </div>
                <div className='flex gap-2'>
                  <p className='font-semibold'>Postal code:</p>
                  <p>{personalInfo.postalCode}</p>
                </div>
              </div>
            </div>
            <div className='mx-2'>
              <div className='flex gap-2 '>
                <p className='font-semibold'>Address:</p>
                <p>{personalInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className='bg-[#0e3f6c] text-center py-3'>
        <p className='resume '>Skills</p>

        {skills && skills.map((skill, index) => {
          return (
            <div key={index} className='hover-animation items-center text-white list-[square] text-lg py-2 '>
              <li>{skill}</li>
            </div>
          )
        })}
      </div>

      <div className='py-4' id="resume">

        <div className='my-4'>
          <div className='xl:flex  lg:flex md:flex justify-evenly gap-5 mx-2'>
            <div className=''>
              <p className='twelve'>Education</p>
              {educationInfo.map((edu,index)=>{
                return(
              <div className='border-l px-2 text-black my-2'>
                <p className='font-bold text-black'>{edu.university}</p>
                <p className='text-black font-medium  flex gap-2'> <p className="text-black font-medium">{edu.domain}</p> || <p className="text-black font-medium">{edu.startYear} </p> -<p className="text-black">{edu.endYear}</p></p>
                <div className='flex '>
                </div>
              </div>

                )
              })}

            </div>
            <div>
              <p className='twelve'>Experience</p>
              {workExperience && workExperience.map((work, index) => {
                return (

                  <div key={index} className='border-l px-2 text-black my-2'>
                    <p className='font-bold text-black'>{work.organizationName}</p>
                    <p className='text-black font-medium flex gap-2'> <p className="text-black font-medium">{work.jobTitle}</p> || <p className="text-black font-medium">{work.startYear}</p> -<p className="text-black"> {work.endYear}</p></p>
                  </div>)
              })}
            </div>

          </div>
        </div>
      </div>
      <div id="skills" className='bg-[#0e3f6c] text-center py-3 border-b-2'>
        <p className='resume '>Projects</p>

        <div class="row align-items-center text-center align-items-center container ">
          <div className="md:grid inline  md:grid-cols-2 xl:grid-cols-3  gap-2 justify-center items-center ">
            {Projects && Projects.map((projects, index) => {
              return (
                <div className='my-1 align-items-center text-center justify-content-center bg-gray-600 md:w-[20rem] rounded-xl shadow-2xl'>
                  <p className="text-black uppercase">{projects.projectNae}</p>
                  <div className="  gap-2 text-black">
                    <div className="flex gap-2 font-semibold mx-2">Url:
                      <p className="text-black ">{projects.projectUrl} </p>
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
      <div className="xl:flex lg:flex md:flex pt-2 xs:text-center gap-7 xl:text-lg xs:text-sm justify-evenly bg-[#0e3f6c] text-black" id="contact">
        <p className="text-white font-semibold">{personalInfo.firstName + " " + personalInfo.lastName}</p>
        <p className="text-white font-semibold">{personalInfo.mobile}</p>
        <p className="text-white font-semibold">{personalInfo.email}</p>
      </div>
    </div>
  )
}
