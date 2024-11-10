import "./PreviewComponent.css";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Container, TextField } from "@mui/material";
import JsPDF from "jspdf";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { templates } from "../../Utils/Data/templates"

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
  projects: state.projectsReducer.projects,
});

const mapDispatchToProps = (dispatch) => ({});

const PreviewComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");
  // console.log("props", props)
  const getTemplate = (template, index) => {
    // console.log("template.id ",template.id )
    if (template.id === props.selectedTemplateId) {
      // cloneElement lets you create a new React element using another element as a starting point.
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
        projects:props.projects,
        index: index,
      });
      return TemplateComp;
    }
  };
  const id = localStorage.getItem('id')
  useEffect(() => {
    console.log(props.projects)
    localStorage.setItem(
      "myPortfolio",
      JSON.stringify([
        {
          template_id: props.selectedTemplateId?props.selectedTemplateId:id,
          id: uniqid(),
          personalInfo: props.personalInfo,
          experiences: props.experiences,
          educationInfo: props.educationInfo,
          skills: props.skills,
          projects:props.projects,
        },
      ])
    );
    if(localStorage.getItem('edit')){
      localStorage.removeItem('edit')
    }

    localStorage.setItem(
      "url",
      `http://localhost:3000/Portfolio?name=${
        props.personalInfo.firstName + " " + props.personalInfo.lastName
      }-portfolio&id=${props.selectedTemplateId?props.selectedTemplateId:id}`
    );
  }, [id]);

  console.log(localStorage.getItem("myPortfolio"));

  const handleSave = () => {
    if (resumeName.length === 0) {
      setError("*Please fill this field");
    } else {
      setError("");
      setLoading(true);
      const report = new JsPDF("portrait", "pt", "a4");
      report
        .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
        .then(() => {
          report.save(`${resumeName}.pdf`);
          setLoading(false);
          //Saving the user data in localstorage
          let resumes = window.localStorage.getItem("resumes");
          // console.log(resumes);
          if (resumes) {
            let newResumes = JSON.parse(resumes);

            let resumeFound = newResumes.find(
              (resume) => resume.id === props.selectedResumeId
            );

            if (resumeFound) {
              const allNewResumes = newResumes.map((resume) => {
                if (resume.id === props.selectedResumeId) {
                  return {
                    template_id: props.selectedTemplateId,
                    id: props.selectedResumeId,
                    personalInfo: props.personalInfo,
                    experiences: props.experiences,
                    educationInfo: props.educationInfo,
                    skills: props.skills,
                  };
                } else return resume;
              });

              window.localStorage.setItem(
                "resumes",
                JSON.stringify(allNewResumes)
              );

              window.location.reload();

              return;
            }

            newResumes.push({
              template_id: props.selectedTemplateId,
              id: uniqid(),
              personalInfo: props.personalInfo,
              experiences: props.experiences,
              educationInfo: props.educationInfo,
              skills: props.skills,
            });

            window.localStorage.setItem("resumes", JSON.stringify(newResumes));
          } else {
            window.localStorage.setItem(
              "resumes",
              JSON.stringify([
                {
                  template_id: props.selectedTemplateId,
                  id: uniqid(),
                  personalInfo: props.personalInfo,
                  experiences: props.experiences,
                  educationInfo: props.educationInfo,
                  skills: props.skills,
                },
              ])
            );
          }

          //Redirect user to the myResumes page
          window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }
  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  return (
    <Container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        },
      }}
      className="preview-container"
    >
      <p className="flex justify-center items-center">
        You have successfully created portfolio Click the button to view it
      </p>
      <a
        href={`http://localhost:3000/Portfolio?name=${props.personalInfo.firstName} ${props.personalInfo.lastName}-portfolio&id=${props.selectedTemplateId?props.selectedTemplateId:id}`}
        className="contained-btn flex justify-center items-center"
        variant="contained"
      >
        View Portfolio
      </a>
      {/* <h2 className="preview-header-title">Resume Preview</h2>
      <div className="resume-preview-grid-container">
        <div className="resume-preview-grid-item" id="previewresume">
          {templates.map((template, index) => {
            return getTemplate(template, index);
          })}
        </div>
        <div className="resume-preview-grid-item">
          <div className="resume-save-container">
            <h3 className="resume-save-title">Create File Name</h3>
            <TextField
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              className="resume-name-field"
              sx={{ width: "70%" }}
              id="outlined-basic"
              variant="outlined"
              error={error.length > 0 ? true : false}
              helperText={error}
            />
            <div className="resume-back-next-container">
              <Button
                onClick={handleBack}
                className="outlined-btn"
                sx={{ marginRight: "20px" }}
                variant="outlined">
                Back
              </Button>
              {loading ? (
                <CircularProgress size={25} />
              ) : (
                <Button
                  onClick={handleSave}
                  className="contained-btn"
                  variant="contained">
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
