import React from 'react'
import content from '../../../images/content.jpg'
import bus1 from '../../../images/bus1.jpg'
export default function ContentCreator(props) {
    // const props = JSON.stringify(props)
    console.log(props);
    
    
    const personalInfo = props.personalinfo?props.personalinfo:""
    const educationInfo = props.educationinfo?props.educationinfo:""
    const workExperience = props.workexperience?props.workexperience:""
    const skills = props.skills?props.skills:""
    return (
        <div>
            <div style={{
                backgroundImage: `url(${content})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div style={{
                    height: '100vh',
                    text: "white",
                    backgroundColor: "silver",
                    opacity: "0.7"
                }} >
                    <div className='text-center pt-3 py-3'>
                        <p className='text-yellow-700 font-mono font-extrabold text-9xl'> {personalInfo.firstName + " " + personalInfo.lastName}</p>
                        <div class="typewriter">
                            <p className='text-black text-xl font-bold'>I am a content creator</p>
                        </div>
                    </div>
                    <div className='mx-auto w-[50rem]  h-auto my-3 p-4 bg-white rounded-3xl shadow-2xl'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <div className='flex flex-col-2'>
                                    <div className=''>
                                        <img src={bus1} className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='mx-4 my-2'>
                                        <p>Name: {personalInfo.firstName + " " + personalInfo.lastName}</p>

                                        <p>Profile: full stack developer</p>

                                        <p>Email: {personalInfo.email}</p>

                                        <p>Phone: {personalInfo.mobile}</p>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <p className='text-lg font-bold'>skills:</p>
                                    <ui className="list-disc">
                                    {skills && skills.map((item,index)=>{
                                        return(

                                            <li key={index}>{item} </li>
                                        )
                                    })}
                                    </ui>
                                </div>
                            </div>
                            <div className='my-2 border-l border-black  px-2'>
                                <p className='text-lg font-bold'>objective:</p>
                                <p>{personalInfo.objective}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container py-3 h-auto xl:flex lg:flex mx-auto justify-center '>
                <div>
                    <p className='text-yellow-700 text-2xl font-bold' style={{ WebkitTextStroke: '1px black' }}>Experience</p>

                    <div className='container'>
                        <div className="circle-with-line justify-start px-2 mx-10">

                            <div className='mx-4 my-4'>
                                <p>comany</p>
                                <div className='flex gap-2 p-2 z-10 rounded-md text-black'>
                                    <p>Job Title</p> |

                                    <p>13,sep</p> -
                                    <p>Present</p>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>
                <div>
                    <p className='text-yellow-700 text-2xl font-bold' style={{ WebkitTextStroke: '1px black' }}>Education</p>

                    <div className="circle-with-line justify-start px-2 mx-10">

                        <div className='mx-4 my-4'>
                            <p>University</p>
                            <div className='flex gap-2 p-2  rounded-md text-black'>
                                <p>program</p>|<p>13,sep</p> -
                                <p>Present</p>
                            </div>
                        </div>

                    </div><div className="circle-with-line justify-start px-2 mx-10">

                        <div className='mx-4 my-4'>
                            <p>University</p>
                            <div className='flex gap-2 p-2  rounded-md text-black'>
                                <p>program</p>|<p>13,sep</p> -
                                <p>Present</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="align-items-center text-center justify-content-center">
                        <h1 className="text-yellow-700 text-2xl font-bold" style={{ WebkitTextStroke: '1px black' }}>SKILLS</h1>
                        {/* <h1 className="position-absolute text-uppercase text-primary">SKILLS</h1> */}
                    </div>
                    <div class="grid grid-cols-2 justify-center animate__animated animate__fadeInRight mx-auto w-72">
                        <ul class="list-disc justify-items-center ">
                            <li class="font-weight-bold">HTML</li>
                            <li class="font-weight-bold">CSS</li>
                            <li class="font-weight-bold">PHP</li>
                        </ul>
                        <ul class="list-disc justify-items-center ">
                            <li class="font-weight-bold">Javascript</li>
                            <li class="font-weight-bold">Angular JS</li>
                            <li class="font-weight-bold">Wordpress</li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <div style={{backgroundColor: "silver",
                    opacity: "0.7",
            }} className=' px-4 py-2 xl:h-[10vh] xs:h-[auto] lg:h-[10vh] '>
                <div className='xl:flex lg:flex md:flex  gap-7 xl:text-lg xs:text-sm justify-center text-black' >
                    <p className='text-black font-semibold'>Contact Details:</p>
                    <p className='text-black font-semibold'>John deo</p>
                    <p className='text-black font-semibold'>0920390219310</p>
                    <p className='text-black font-semibold'>Johndeo@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
