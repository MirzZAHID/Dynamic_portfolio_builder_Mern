import "./Styles/MyResumes.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import JsPDF from "jspdf";
import Grid from "@mui/material/Grid";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { connect } from "react-redux";
import { templates } from "../Utils/Data/templates";
import { Navbar, BlackScreen } from ".";
import UserLayout from "../Layouts/UserLayout";
import {
  addAllExperience,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectResume,
  selectTemplate,
} from "../Redux/Actions/actions";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

const MyResumes = (props) => {
  const [resumes, setResumes] = useState([]);
  const [activeTab, setActiveTab] = useState("myPortfolio"); // Default to "My Portfolio"
  const navigate = useNavigate();
  const [name, setName] = useState("Username");
  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  const renderCreatePortfolioTab = () => {
    return (
      <div className="create-portfolio-tab-content">
        <p>
          Use professional field-tested Portfolio templates that follow the
          exact ‘Portfolio rules’ employers look for. Easy to use and done
          within minutes - try now for free!
        </p>
        <Button onClick={() => navigate("/category")} variant="contained">
          Create Now
        </Button>
      </div>
    );
  };

  const portfolio = JSON.parse(localStorage.getItem("myPortfolio"));
  console.log(portfolio);
  const url = localStorage.getItem("url");
  useEffect(() => {
    // Assuming portfolio exists and contains personalInfo with firstName
    if (
      portfolio &&
      portfolio[0].personalInfo &&
      portfolio[0].personalInfo.firstName
    ) {
      setName(
        portfolio[0].personalInfo.firstName +
          " " +
          portfolio[0].personalInfo.lastName
      );
    }
  }, [portfolio]);
  const renderMyPortfolioTab = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="grid"
        >
          {portfolio ? (
            <div>
              {portfolio.map((item, index) => {
                return (
                  <Grid
                    item
                    className="resume bg-white w-auto md:w-3/4 lg:w-full rounded-xl lg:p-4 lg:m-4"
                    key={index}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <Grid container>
                        <Grid lg={6} xs={12}>
                          <Button
                            className=""
                            onClick={() => {
                              navigate("/template/fill-details");
                              localStorage.setItem("edit", true);
                              localStorage.setItem(
                                "id",
                                portfolio[0].template_id
                              );
                            }}
                          >
                            Edit Portfolio
                          </Button>
                        </Grid>
                        <Grid lg={6} xs={12}>
                          <a
                            href={url}
                            className="text-md font-bold p-4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See Portfolio
                          </a>
                        </Grid>
                      </Grid>
                    </div>
                    <h1 className="font-bold text-3xl mb-3 text-center">
                      Portfolio
                    </h1>
                    <div className="flex justify-center items-center mt-2 mb-4">
                      <img
                        src={item.personalInfo.profileImg}
                        className="w-36 h-36 rounded-full"
                        alt="Profile"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-10 p-3">
                      <div>
                        <h1 className="text-base font-bold mt-2 text-black">
                          Personal Information:
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            First Name:
                          </span>
                          <span className="text-sm font-semibold ml-5 bg-gray-100 text-black p-2">
                            {item.personalInfo.firstName}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Last Name:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 text-black ml-5">
                            {item.personalInfo.lastName}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Email:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 text-black p-2 ml-5">
                            {item.personalInfo.email}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Country:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.country}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            City:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.city}
                          </span>
                        </h1>
                        <h1 className="mt-2 text-black">
                          <span className="text-sm font-semibold text-black">
                            Address:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.address}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Mobile Number:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.mobile}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Postal Code:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.postalCode}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Objective:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.personalInfo.objective}
                          </span>
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-base font-bold mt-2 text-black">
                          Educational Information:
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            University Name:
                          </span>
                          <span className="text-sm font-semibold ml-5 bg-gray-100 p-2 text-black">
                            {item.educationInfo.university}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Study Domain:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.educationInfo.domain}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Degree Level:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.educationInfo.degree}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            Start Year:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.educationInfo.startYear}
                          </span>
                        </h1>
                        <h1 className="mt-2">
                          <span className="text-sm font-semibold text-black">
                            End Year:
                          </span>
                          <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                            {item.educationInfo.endYear}
                          </span>
                        </h1>
                        <h1 className="mt-4 text-base font-bold text-black">
                          Skills:
                        </h1>
                        {item.skills.map((itm, index) => {
                          return (
                            <h1 className="mt-2" key={index}>
                              <span className="text-sm w-40 font-semibold bg-gray-100 p-2 ml-5 text-black">
                                {itm}
                              </span>
                            </h1>
                          );
                        })}
                      </div>
                      <div>
                        {item.experiences.map((itm, index) => {
                          return (
                            <div key={index}>
                              <h1 className="text-base font-bold mt-2 text-black">
                                Experience:
                              </h1>
                              <h1 className="mt-2">
                                <span className="text-sm font-semibold text-black">
                                  Job Title:
                                </span>
                                <span className="text-sm font-semibold ml-5 bg-gray-100 p-2 text-black">
                                  {itm.jobTitle || itm.format}
                                </span>
                              </h1>
                              <h1 className="mt-2">
                                <span className="text-sm font-semibold text-black">
                                  Organization Name:
                                </span>
                                <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                                  {itm.organizationName || itm.innings}
                                </span>
                              </h1>
                              <h1 className="mt-2">
                                <span className="text-sm font-semibold text-black">
                                  Start Year:
                                </span>
                                <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                                  {itm.startYear || itm.score}
                                </span>
                              </h1>
                              {itm.endYear && (
                                <h1 className="mt-2">
                                  <span className="text-sm font-semibold">
                                    End Year:
                                  </span>
                                  <span className="text-sm font-semibold bg-gray-100 p-2 ml-5 text-black">
                                    {itm.endYear}
                                  </span>
                                </h1>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </div>
          ) : (
            <div className="no-resumes-container text-center py-20">
              <SentimentVeryDissatisfiedIcon fontSize="large" />
              <p className="no-resumes-text mt-4">
                You do not have any Resumes yet. Make One to view it here.
              </p>
            </div>
          )}
        </Grid>
      </Box>
    );
  };


  const [imageURL, setImageURL] = useState(null); // Add a state for the image URL
  const [templateName, setTemplateName] = useState(null);

  const convertToBase64 = (newFile) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(newFile);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    convertToBase64(file).then((res)=>setImageURL(res))
    // setImageURL(base64);
    // if (file) {
    //   const url = URL.createObjectURL(file);
    // }
  };
  const RenderBgImg = () => {
    const handleSubmit = () => {
      const data = {
        name: templateName,
        img: imageURL,
      };
      localStorage.setItem("image", JSON.stringify(data));
      alert("Submitted")
    };

    return (
      <div className="flex justify-center items-center">
        <div>
          <label>Template Name(you want to change background except "Football 1" and "Computer science 2")</label>
          <input
            type="text"
            className="mb-8"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
          <input type="file" onChange={handleFileChange} />
          <div className="flex justify-center items-center mt-5">
            <button onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    );
  };

  const setUserData = (resume) => {
    props.onAddPersonalInfo(resume.personalInfo);
    props.setAllExperience(resume.experiences);
    props.onAddEducation(resume.educationInfo);
    props.onEditSkill(resume.skills);
  };

  const renderLogoutTab = () => {
    const handleLogout = () => {
      // Perform any necessary logout actions, clear user data, etc.
      // Redirect to the login page
      localStorage.removeItem("token");
      navigate("/login");
    };

    return (
      <div className="logout-tab-content">
        <p>
          You are logged in as <span className="font-bold text-md">{name}</span>{" "}
        </p>
        <Button onClick={handleLogout} variant="contained">
          Logout
        </Button>
      </div>
    );
  };
  useEffect(() => {
    const getAccount = async () => {
      const token = localStorage.getItem("token");
    };
    getAccount();
  }, []);
  return (
    <>
      {/* <Navbar
        active={
          activeTab === "myPortfolio"
            ? "My Resumes"
            : activeTab === "createPortfolio"
            ? "Create Portfolio"
            : "Logout"
        }
      /> */}
      <UserLayout>
        <div className="my-resumes">
          <div className="tab-navigation">
            <Button
              onClick={() => setActiveTab("createPortfolio")}
              variant={
                activeTab === "createPortfolio" ? "contained" : "outlined"
              }
            >
              Create Portfolio
            </Button>

            <Button onClick={() => navigate("/template")} variant="outlined">
              Other Templates
            </Button>

            <Button
              onClick={() => setActiveTab("myPortfolio")}
              variant={activeTab === "myPortfolio" ? "contained" : "outlined"}
            >
              My Portfolio
            </Button>
            <Button
              onClick={() => setActiveTab("changeImage")}
              variant={activeTab === "changeImage" ? "contained" : "outlined"}
            >
              Change Background Image
            </Button>
            <Button
              onClick={() => setActiveTab("logout")}
              variant={activeTab === "logout" ? "contained" : "outlined"}
            >
              Logout
            </Button>
          </div>

          {activeTab === "createPortfolio"
            ? renderCreatePortfolioTab()
            : activeTab === "myPortfolio"
            ? renderMyPortfolioTab()
            : activeTab === "changeImage"
            ? RenderBgImg()
            : renderLogoutTab()}
        </div>
      </UserLayout>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);
