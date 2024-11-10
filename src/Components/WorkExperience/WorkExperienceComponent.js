import "./WorkExperienceComponent.css";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import { connect } from "react-redux";
import { addAllExperience, addExperience } from "../../Redux/Actions/actions";
import {
  BackNextBtnComponent,
  SelectComponent,
  InputComponent,
} from "../../Pages/index";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs
const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

// mapDispatchToProps allows you to specify which actions your component might need to dispatch
const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

const years = [
  " Present ",
  " 2024 ",
  " 2023 ",
  " 2022 ",
  " 2021 ",
  " 2020 ",
  " 2019 ",
  " 2018 ",
  " 2017 ",
  " 2016 ",
  " 2015 ",
  " 2014 ",
  " 2013 ",
  " 2012 ",
  " 2011 ",
  " 2010 ",
  " 2009 ",
  " 2008 ",
  " 2007 ",
  " 2006 ",
  " 2005 ",
  " 2004 ",
  " 2003 ",
  " 2002 ",
  " 2001 ",
  " 2000 ",
];

const WorkExperienceComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState(null);
  console.log(portfolio);
  const folio = JSON.parse(localStorage.getItem("myPortfolio"));
  const edit = JSON.parse(localStorage.getItem("edit"));
  useEffect(() => {
    if (edit == true) {
      setPortfolio(folio[0].experiences);
    }
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);

    let experienceOne = {};
    let experienceTwo = {};
    let experienceThree = {};

    for (let index in data) {
      // console.log(index.slice(0, index.length));
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else if(index.includes("2")){
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
      else{
        experienceThree[index.slice(0, index.length - 1)] = data[index];

      }
    }

    // console.log(experienceOne, experienceTwo);

    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
        { ...experienceThree, id: 3 },
      ]);
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // console.log(props.experiences, errors);

  const addNewExperience = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };
  const addNewFormat = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      format: "",
      innings: "",
      score: "",
    });
  };

  const editJobTitleExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, jobTitle: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };
  const editFormat = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, format: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  const editOrganisationNameExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, organizationName: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };
  const editInnings= (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, innings: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };
  const editScore = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, score: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };
  console.log(props.experiences);
  const { transcript, resetTranscript } = useSpeechRecognition({
    language: "en-US",
    continuous: true,
  });
  const handleListen = (value, experienceid) => {
    SpeechRecognition.startListening();
    if (value === "jobTitle") {
      const newValue = transcript;
      editJobTitleExperience(newValue, experienceid);
      // Manually trigger input event after updating field value
      register(`jobTitle${experienceid}`).onChange({
        target: { value: newValue },
      });
      return;
    }
    if (value === "orgName") {
      const newValue = transcript;
      editOrganisationNameExperience(newValue, experienceid);
      // Manually trigger input event after updating field value
      register(`organizationName${experienceid}`).onChange({
        target: { value: newValue },
      });
      return;
    }
    if (value === "format") {
      const newValue = transcript;
      editFormat(newValue, experienceid);
      // Manually trigger input event after updating field value
      register(`format${experienceid}`).onChange({
        target: { value: newValue },
      });
      return;
    }
    if (value === "innings") {
      const newValue = transcript;
      editInnings(newValue, experienceid);
      // Manually trigger input event after updating field value
      register(`innings${experienceid}`).onChange({
        target: { value: newValue },
      });
      return;
    }
    if (value === "score") {
      const newValue = transcript;
      editScore(newValue, experienceid);
      // Manually trigger input event after updating field value
      register(`score${experienceid}`).onChange({
        target: { value: newValue },
      });
      return;
    }
  };

  const [special, setSpecial] = useState(false); // State to store if "special" is true

  useEffect(() => {
    const specialItem = localStorage.getItem("special");
    if (specialItem === "true") {
      setSpecial(true);
    }
  }, []);
  const handleRemoveExperience = (id) => {
    const updatedExperiences = props.experiences.filter(experience => experience.id !== id);
    props.setAllExperience(updatedExperiences);
  };
  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">Work Experience</h2>
      {!edit && (
        <form onSubmit={handleSubmit(handleNext)}>
          {props.experiences.map((experience) => {
            return (
              <div key={experience.id} className="experience-cont">
                {!special && (
                  <h3 className="experience-heading">
                    Experience {experience.id}
                  </h3>
                )}{" "}
                {!special && <Divider sx={{ margin: "5px 0px" }} />}{" "}
                <div className="experience-form-cont">

                  <div className="flex space-x-2">
                  <Button onClick={() => handleRemoveExperience(experience.id)}>Remove</Button>
                    {!special &&
                    <>
                    <InputComponent
                      title={"Job Title"}
                      type={"text"}
                      name={"jobTitle" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.jobTitle}
                      setValue={(value) =>
                        editJobTitleExperience(value, experience.id)
                      }
                      error={Boolean(errors[`jobTitle${experience.id}`])}
                      errorMessage={
                        errors[`jobTitle${experience.id}`]
                          ? errors[`jobTitle${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("jobTitle", experience.id)}
                      >
                      <img src={require("../../images/mic.png")} />
                    </div>
                    </>
                    }
                  </div>

                  <div className="flex space-x-2">
                    {!special && 
                    <>
                    <InputComponent
                      title={"Organization Name"}
                      type={"text"}
                      name={"organizationName" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.organizationName}
                      setValue={(value) =>
                        editOrganisationNameExperience(value, experience.id)
                      }
                      error={
                        errors[`organizationName${experience.id}`]
                          ? true
                          : false
                      }
                      errorMessage={
                        errors[`organizationName${experience.id}`]
                          ? errors[`organizationName${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("orgName", experience.id)}
                    >
                      <img src={require("../../images/mic.png")} />
                    </div>
                    </>}
                  </div>
                  {!special &&
                  <>
                  <SelectComponent
                    title={"Start Year"}
                    errorMessage={
                      errors[`startYear${experience.id}`]
                        ? errors[`startYear${experience.id}`].message
                        : null
                    }
                    error={errors[`startYear${experience.id}`] ? true : false}
                  >
                    <Controller
                      render={(props) => {
                        return (
                          <Select
                            value={props.field.value}
                            onChange={props.field.onChange}
                            error={
                              errors
                                ? errors[`startYear${experience.id}`]
                                  ? true
                                  : false
                                : false
                            }
                          >
                            {years.map((year, index) => {
                              return (
                                <MenuItem key={index} value={year}>
                                  {year}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        );
                      }}
                      name={`startYear${experience.id}`}
                      control={control}
                      rules={{ required: "*Please select start year" }}
                      defaultValue={experience.startYear}
                    />
                  </SelectComponent>
                  <SelectComponent
                    title={"End Year"}
                    errorMessage={
                      errors[`endYear${experience.id}`]
                        ? errors[`endYear${experience.id}`].message
                        : null
                    }
                    error={errors[`endYear${experience.id}`] ? true : false}
                  >
                    <Controller
                      render={(props) => (
                        <Select
                          value={props.field.value}
                          onChange={props.field.onChange}
                          error={
                            errors
                              ? errors[`endYear${experience.id}`]
                                ? true
                                : false
                              : false
                          }
                        >
                          {years.map((year, index) => {
                            return (
                              <MenuItem key={index} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name={"endYear" + experience.id}
                      control={control}
                      rules={{ required: "*Please select end year" }}
                      defaultValue={experience.endYear}
                    />
                  </SelectComponent>
                  </>}
                  {special && (
                  <div>
                    <div className="flex space-x-2">

                    <InputComponent
                      title={"Format"}
                      type={"text"}
                      name={"format" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.format}
                      setValue={(value) =>
                        editFormat(value, experience.id)
                      }
                      error={Boolean(errors[`format${experience.id}`])}
                      errorMessage={
                        errors[`format${experience.id}`]
                          ? errors[`format${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("format", experience.id)}
                      >
                      <img src={require("../../images/mic.png")} />
                    </div>
                    </div>
                    <div className="flex space-x-2">

                    <InputComponent
                      title={"Innings"}
                      type={"text"}
                      name={"innings" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.innings}
                      setValue={(value) =>
                        editInnings(value, experience.id)
                      }
                      error={Boolean(errors[`innnings${experience.id}`])}
                      errorMessage={
                        errors[`innings${experience.id}`]
                          ? errors[`innings${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("innings", experience.id)}
                      >
                      <img src={require("../../images/mic.png")} />
                    </div>
                    </div>
                    <div className="flex space-x-2">

                    <InputComponent
                      title={"Score"}
                      type={"text"}
                      name={"score" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.score}
                      setValue={(value) =>
                        editScore(value, experience.id)
                      }
                      error={Boolean(errors[`score${experience.id}`])}
                      errorMessage={
                        errors[`score${experience.id}`]
                          ? errors[`score${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("score", experience.id)}
                      >
                      <img src={require("../../images/mic.png")} />
                    </div>
                    </div>
                  </div>
                )}
                </div>
              </div>
            );
          })}
          {props.experiences.length < 3 && (
          <div className="add-new-btn-cont">
            <Button onClick={special?addNewFormat:addNewExperience} variant="text">
              Add New
            </Button>
          </div>
        )}
          <Divider sx={{ margin: "10px 0px" }} />
          <BackNextBtnComponent
            onNext={handleNext}
            onBack={handleBack}
            loading={loading}
            tab={props.tab}
            nextTitle={"Next"}
            backTitle={"Back"}
          />
        </form>
      )}
      {edit && (
        <form onSubmit={handleSubmit(handleNext)}>
          {props.experiences.map((experience, index) => {
            const portfolioObject = (portfolio && portfolio[index]) || {};
            return (
              <div key={experience.id} className="experience-cont">
                <h3 className="experience-heading">
                  Experience {experience.id}
                </h3>
                <Divider sx={{ margin: "5px 0px" }} />
                <div className="experience-form-cont">
                  <div className="flex space-x-2">
                    <InputComponent
                      title={"Job Title"}
                      type={"text"}
                      name={"jobTitle" + experience.id}
                      register={register}
                      multiline={false}
                      value={experience.jobTitle || portfolioObject.jobTitle}
                      setValue={(value) =>
                        editJobTitleExperience(value, experience.id)
                      }
                      error={Boolean(errors[`jobTitle${experience.id}`])}
                      errorMessage={
                        errors[`jobTitle${experience.id}`]
                          ? errors[`jobTitle${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("jobTitle", experience.id)}
                    >
                      <img src={require("../../images/mic.png")} />
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <InputComponent
                      title={"Organization Name"}
                      type={"text"}
                      name={"organizationName" + experience.id}
                      register={register}
                      multiline={false}
                      value={
                        experience.organizationName ||
                        portfolioObject.organizationName
                      }
                      setValue={(value) =>
                        editOrganisationNameExperience(value, experience.id)
                      }
                      error={
                        errors[`organizationName${experience.id}`]
                          ? true
                          : false
                      }
                      errorMessage={
                        errors[`organizationName${experience.id}`]
                          ? errors[`organizationName${experience.id}`].message
                          : null
                      }
                    />
                    <div
                      className="flex justify-center items-center cursor-pointer mt-4"
                      onClick={() => handleListen("orgName", experience.id)}
                    >
                      <img src={require("../../images/mic.png")} />
                    </div>
                  </div>
                  <SelectComponent
                    title={"Start Year"}
                    errorMessage={
                      errors[`startYear${experience.id}`]
                        ? errors[`startYear${experience.id}`].message
                        : null
                    }
                    error={errors[`startYear${experience.id}`] ? true : false}
                  >
                    <Controller
                      render={(props) => {
                        return (
                          <Select
                            value={props.field.value}
                            onChange={props.field.onChange}
                            error={
                              errors
                                ? errors[`startYear${experience.id}`]
                                  ? true
                                  : false
                                : false
                            }
                          >
                            {years.map((year, index) => {
                              return (
                                <MenuItem key={index} value={year}>
                                  {year}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        );
                      }}
                      name={`startYear${experience.id}`}
                      control={control}
                      rules={{ required: "*Please select start year" }}
                      defaultValue={portfolioObject.startYear}
                    />
                  </SelectComponent>
                  <SelectComponent
                    title={"End Year"}
                    errorMessage={
                      errors[`endYear${experience.id}`]
                        ? errors[`endYear${experience.id}`].message
                        : null
                    }
                    error={errors[`endYear${experience.id}`] ? true : false}
                  >
                    <Controller
                      render={(props) => (
                        <Select
                          value={props.field.value}
                          onChange={props.field.onChange}
                          error={
                            errors
                              ? errors[`endYear${experience.id}`]
                                ? true
                                : false
                              : false
                          }
                        >
                          {years.map((year, index) => {
                            return (
                              <MenuItem key={index} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name={"endYear" + experience.id}
                      control={control}
                      rules={{ required: "*Please select end year" }}
                      defaultValue={portfolioObject.endYear}
                    />
                  </SelectComponent>
                </div>
              </div>
            );
          })}
          {props.experiences.length === 2 ? null : (
            <div className="add-new-btn-cont">
              <Button onClick={addNewExperience} variant="text">
                Add New
              </Button>
            </div>
          )}
          <Divider sx={{ margin: "10px 0px" }} />
          <BackNextBtnComponent
            onNext={handleNext}
            onBack={handleBack}
            loading={loading}
            tab={props.tab}
            nextTitle={"Next"}
            backTitle={"Back"}
          />
        </form>
      )}
    </Paper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkExperienceComponent);
