
import "./KeySkillsComponent.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { BackNextBtnComponent, InputComponent } from "../../Pages/index";
import {
  addNewSkills,
  deleteSkill,
  editSkill,
  addProject,
  editProject,
  deleteProject,
} from "../../Redux/Actions/actions";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
  projects: state.projectsReducer.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
  onAddProject: () => dispatch(addProject()),
  onEditProject: (id, projectName, projectUrl) =>
    dispatch(editProject(id, projectName, projectUrl)),
  onDeleteProject: (id) => dispatch(deleteProject(id)),
});

function KeySkillsComponent(props) {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState(null);
  const folio = JSON.parse(localStorage.getItem("myPortfolio"));
  const edit = JSON.parse(localStorage.getItem("edit"));

  useEffect(() => {
    if (edit === true) {
      setPortfolio(folio[0].skills);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePreview = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };
  console.log(props)

  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) =>
      index === id ? value : skill
    );
    props.onEditSkill(newSkills);
  };

  const onEditProject = (value, id, field) => {
    const updatedProjects = props.projects.map((project) =>
      project.id === id ? { ...project, [field]: value } : project
    );
    props.onEditProject(updatedProjects);
  };

  const { transcript, resetTranscript } = useSpeechRecognition({
    language: "en-US",
    continuous: true,
  });

  const handleListen = (status, id) => {
    SpeechRecognition.startListening();
    if (status === "skill") {
      onEditSkill(transcript, id);
    }
  };
  console.log(props.projects)

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      {!edit && (
        <form onSubmit={handleSubmit(handlePreview)}>
          <div className="key-skills-form-fields">
            {props.skills.map((skill, index) => (
              <div key={index} className="key-input-with-delete">
                <div className="flex space-x-2">
                  <InputComponent
                    type="text"
                    name={`skill${index + 1}`}
                    register={register}
                    multiline={false}
                    value={skill}
                    setValue={(skill) => onEditSkill(skill, index)}
                    error={errors[`skill${index + 1}`] ? true : false}
                    errorMessage={
                      errors[`skill${index + 1}`]
                        ? errors[`skill${index + 1}`].message
                        : null
                    }
                  />
                  <div
                    className="flex justify-center items-center cursor-pointer mt-2"
                    onClick={() => handleListen("skill", index)}
                  >
                    <img src={require("../../images/mic.png")} />
                  </div>
                </div>
                {props.skills.length > 1 && (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            ))}
          </div>
          {props.skills.length < 6 && (
            <Button
              className="add-new-btn"
              variant="text"
              onClick={props.onAddNewSkill}
            >
              Add new
            </Button>
          )}
          <Divider className="key-skills-divider" />
          <h2 className="projects-heading">Projects</h2>
          <Divider />
          {/* <form onSubmit={handleSubmit(handlePreview)}> */}
            <div className="projects-form-fields">
              {props.projects.map((project, index) => (
                <div key={index} className="project-input-with-delete">
                  <div className="flex space-x-2">
                  <InputComponent
                    placeholder="Project name"
                    type="text"
                    name={`projectName${index + 1}`}
                    register={register}
                    multiline={false}
                    value={project.projectName}
                    setValue={(value) => onEditProject(value, project.id, "projectName")}
                    error={errors[`projectName${index + 1}`] ? true : false}
                    errorMessage={errors[`projectName${index + 1}`] ? errors[`projectName${index + 1}`].message : null}
                  />
                  <InputComponent
                   placeholder="Project Url"
                    type="text"
                    name={`projectUrl${index + 1}`}
                    register={register}
                    multiline={false}
                    value={project.projectUrl}
                    setValue={(value) => onEditProject(value, project.id, "projectUrl")}
                    error={errors[`projectUrl${index + 1}`] ? true : false}
                    errorMessage={errors[`projectUrl${index + 1}`] ? errors[`projectUrl${index + 1}`].message : null}
                  />
                  <InputComponent
                   placeholder="Project Description"
                    type="text"
                    name={`desc${index + 1}`}
                    register={register}
                    multiline={false}
                    value={project.desc}
                    setValue={(value) => onEditProject(value, project.id, "desc")}
                    error={errors[`desc${index + 1}`] ? true : false}
                    errorMessage={errors[`desc${index + 1}`] ? errors[`desc${index + 1}`].message : null}
                  />
                  </div>
                  {props.projects.length > 1 && (
                    <DeleteOutlineOutlinedIcon
                      sx={{ marginLeft: "10px", cursor: "pointer" }}
                      onClick={() => props.onDeleteProject(project.id)}
                    />
                  )}
                </div>
              ))}
            </div>
            <Button
              className="add-new-btn"
              variant="text"
              onClick={props.onAddProject}
            >
              Add new project
            </Button>
            <Divider className="projects-divider" />
            <BackNextBtnComponent
              onNext={handlePreview}
              loading={loading}
              tab={props.tab}
              onBack={handleBack}
              nextTitle={"Preview"}
              backTitle={"Back"}
            />
          {/* </form> */}
        </form>
      )}
      {edit && portfolio && (
        <form onSubmit={handleSubmit(handlePreview)}>
          <div className="key-skills-form-fields">
            {props.skills.map((skill, index) => (
              <div key={index} className="key-input-with-delete">
                <div className="flex space-x-2">
                  <InputComponent
                    type="text"
                    name={`skill${index + 1}`}
                    register={register}
                    multiline={false}
                    value={skill || portfolio[index]}
                    setValue={(skill) => onEditSkill(skill, index)}
                    error={errors[`skill${index + 1}`] ? true : false}
                    errorMessage={
                      errors[`skill${index + 1}`]
                        ? errors[`skill${index + 1}`].message
                        : null
                    }
                  />
                  <div
                    className="flex justify-center items-center cursor-pointer mt-2"
                    onClick={() => handleListen("skill", index)}
                  >
                    <img src={require("../../images/mic.png")} />
                  </div>
                </div>
                {props.skills.length > 1 && (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            ))}
          </div>
          {props.skills.length < 6 && (
            <Button
              className="add-new-btn"
              variant="text"
              onClick={props.onAddNewSkill}
            >
              Add new
            </Button>
          )}
          <Divider className="key-skills-divider" />
          <BackNextBtnComponent
            onNext={handlePreview}
            loading={loading}
            tab={props.tab}
            onBack={handleBack}
            nextTitle={"Preview"}
            backTitle={"Back"}
          />
        </form>
      )}
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);


