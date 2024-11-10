// import { Divider, MenuItem, Paper, Select } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import "./EducationComponent.css";
// import {
//   BackNextBtnComponent,
//   SelectComponent,
//   InputComponent,
// } from "../../Pages/index";
// import { connect } from "react-redux";
// import { addEducation } from "../../Redux/Actions/actions";
// import { useForm, Controller } from "react-hook-form";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// const mapStateToProps = (state) => ({
//   educationInfo: state.educationDetailsReducer.educationInfo,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onAddEducation: (details) => dispatch(addEducation(details)),
// });

// const years = [
//   " Present ",
//   " 2024 ",
//   " 2023 ",
//   " 2022 ",
//   " 2021 ",
//   " 2020 ",
//   " 2019 ",
//   " 2018 ",
//   " 2017 ",
//   " 2016 ",
//   " 2015 ",
//   " 2014 ",
//   " 2013 ",
//   " 2012 ",
//   " 2011 ",
//   " 2010 ",
//   " 2009 ",
//   " 2008 ",
//   " 2007 ",
//   " 2006 ",
//   " 2005 ",
//   " 2004 ",
//   " 2003 ",
//   " 2002 ",
//   " 2001 ",
//   " 2000 ",
// ];

// const EducationComponent = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [portfolio, setPortfolio] = useState(null);
//   console.log(portfolio);
//   const folio = JSON.parse(localStorage.getItem("myPortfolio"));
//   const edit = JSON.parse(localStorage.getItem("edit"));
//   useEffect(() => {
//     if (edit == true) {
//       setPortfolio(folio[0].educationInfo);
//     }
//   }, []);
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   const handleBack = () => {
//     props.setTab(props.tab - 1);
//   };

//   const handleNext = (data) => {
//     // console.log(data);
//     setLoading(true);
//     props.onAddEducation(data);

//     setTimeout(() => {
//       setLoading(false);
//       props.setTab(props.tab + 1);
//     }, 1000);
//   };
//   console.log(props.educationInfo, errors);
//   // console.log(props.educationInfo, errors);
//   const { transcript, resetTranscript } = useSpeechRecognition({
//     language: "en-US",
//     continuous: true,
//   });
//   const handleListen = (status) => {
//     SpeechRecognition.startListening();
//     if (status === "domain") {
//       props.onAddEducation({ ...props.educationInfo, domain: transcript });
//       return;
//     }
//     if (status === "university") {
//       props.onAddEducation({ ...props.educationInfo, university: transcript });
//       return;
//     }
//     if (status === "degree") {
//       props.onAddEducation({ ...props.educationInfo, degree: transcript });
//       return;
//     }
//   };

//   return (
//     <Paper className="education-paper" elevation={3}>
//       <h2 className="education-heading">Education Details</h2>
//       <Divider sx={{ margin: "10px 0px" }} />
//       {!edit && (
//         <form onSubmit={handleSubmit(handleNext)}>
//           <div className="education-form-cont">
//             <div className="flex space-x-2">
//               <InputComponent
//                 title={"Domain"}
//                 type={"text"}
//                 name={"domain"}
//                 register={register}
//                 multiline={false}
//                 value={props.educationInfo.domain}
//                 setValue={(value) =>
//                   props.onAddEducation({
//                     ...props.educationInfo,
//                     domain: value,
//                   })
//                 }
//                 error={errors.domain ? true : false}
//                 errorMessage={errors.domain ? errors.domain.message : null}
//               />
//               <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("domain")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <InputComponent
//                 title={"University"}
//                 type={"text"}
//                 name={"university"}
//                 register={register}
//                 multiline={false}
//                 value={props.educationInfo.university}
//                 setValue={(value) =>
//                   props.onAddEducation({
//                     ...props.educationInfo,
//                     university: value,
//                   })
//                 }
//                 error={errors.university ? true : false}
//                 errorMessage={
//                   errors.university ? errors.university.message : null
//                 }
//               />
//               <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("university")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <InputComponent
//                 title={"Degree"}
//                 type={"text"}
//                 name={"degree"}
//                 register={register}
//                 multiline={false}
//                 value={props.educationInfo.degree}
//                 setValue={(value) =>
//                   props.onAddEducation({
//                     ...props.educationInfo,
//                     degree: value,
//                   })
//                 }
//                 error={errors.degree ? true : false}
//                 errorMessage={errors.degree ? errors.degree.message : null}
//               />
//               <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("degree")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>
//             </div>
//             <SelectComponent
//               title={"Start Year"}
//               errorMessage={errors.startYear ? errors.startYear.message : null}
//               error={errors.startYear ? true : false}
//             >
//               <Controller
//                 render={(props) => {
//                   // console.log(props);
//                   return (
//                     <Select
//                       value={props.field.value}
//                       onChange={props.field.onChange}
//                       error={errors.startYear ? true : false}
//                     >
//                       {years.map((year, index) => {
//                         return (
//                           <MenuItem key={index} value={year}>
//                             {year}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                   );
//                 }}
//                 name={"startYear"}
//                 control={control}
//                 rules={{ required: "*Please select start year" }}
//                 defaultValue={props.educationInfo.startYear}
//               />
//             </SelectComponent>
//             <SelectComponent
//               title={"End Year"}
//               errorMessage={errors.endYear ? errors.endYear.message : null}
//               error={errors.endYear ? true : false}
//             >
//               <Controller
//                 render={(props) => (
//                   <Select
//                     value={props.field.value}
//                     onChange={props.field.onChange}
//                     error={errors.endYear ? true : false}
//                   >
//                     {years.map((year, index) => {
//                       return (
//                         <MenuItem key={index} value={year}>
//                           {year}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 )}
//                 name={"endYear"}
//                 control={control}
//                 rules={{ required: "*Please select end year" }}
//                 defaultValue={props.educationInfo.endYear}
//               />
//             </SelectComponent>
//           </div>
//           <Divider sx={{ margin: "10px 0px" }} />
//           <BackNextBtnComponent
//             onNext={handleNext}
//             onBack={handleBack}
//             loading={loading}
//             tab={props.tab}
//             nextTitle={"Next"}
//             backTitle={"Back"}
//           />
//         </form>
//       )}
//       {edit && portfolio && (
//         <form onSubmit={handleSubmit(handleNext)}>
//           <div className="education-form-cont">
//             <div className="flex space-x-2">
//             <InputComponent
//               title={"Domain"}
//               type={"text"}
//               name={"domain"}
//               register={register}
//               multiline={false}
//               value={props.educationInfo.domain || portfolio.domain}
//               setValue={(value) =>
//                 props.onAddEducation({ ...props.educationInfo, domain: value })
//               }
//               error={errors.domain ? true : false}
//               errorMessage={errors.domain ? errors.domain.message : null}
//             />
//             <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("domain")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>
//             </div>
//             <div></div>
//             <div className="flex space-x-2">
//             <InputComponent
//               title={"University"}
//               type={"text"}
//               name={"university"}
//               register={register}
//               multiline={false}
//               value={props.educationInfo.university || portfolio.university}
//               setValue={(value) =>
//                 props.onAddEducation({
//                   ...props.educationInfo,
//                   university: value,
//                 })
//               }
//               error={errors.university ? true : false}
//               errorMessage={
//                 errors.university ? errors.university.message : null
//               }
//             />
//             <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("university")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>

//             </div>

//             <div className="flex space-x-2">
//             <InputComponent
//               title={"Degree"}
//               type={"text"}
//               name={"degree"}
//               register={register}
//               multiline={false}
//               value={props.educationInfo.degree || portfolio.degree}
//               setValue={(value) =>
//                 props.onAddEducation({ ...props.educationInfo, degree: value })
//               }
//               error={errors.degree ? true : false}
//               errorMessage={errors.degree ? errors.degree.message : null}
//             />
//             <div
//                 className="flex justify-center items-center cursor-pointer mt-4"
//                 onClick={() => handleListen("degree")}
//               >
//                 <img src={require("../../images/mic.png")} />
//               </div>
//             </div>
//             <SelectComponent
//               title={"Start Year"}
//               errorMessage={errors.startYear ? errors.startYear.message : null}
//               error={errors.startYear ? true : false}
//             >
//               <Controller
//                 render={(props) => {
//                   // console.log(props);
//                   return (
//                     <Select
//                       value={props.field.value}
//                       onChange={props.field.onChange}
//                       error={errors.startYear ? true : false}
//                     >
//                       {years.map((year, index) => {
//                         return (
//                           <MenuItem key={index} value={year}>
//                             {year}
//                           </MenuItem>
//                         );
//                       })}
//                     </Select>
//                   );
//                 }}
//                 name={"startYear"}
//                 control={control}
//                 rules={{ required: "*Please select start year" }}
//                 defaultValue={props.educationInfo.startYear}
//               />
//             </SelectComponent>
//             <SelectComponent
//               title={"End Year"}
//               errorMessage={errors.endYear ? errors.endYear.message : null}
//               error={errors.endYear ? true : false}
//             >
//               <Controller
//                 render={(props) => (
//                   <Select
//                     value={props.field.value}
//                     onChange={props.field.onChange}
//                     error={errors.endYear ? true : false}
//                   >
//                     {years.map((year, index) => {
//                       return (
//                         <MenuItem key={index} value={year}>
//                           {year}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 )}
//                 name={"endYear"}
//                 control={control}
//                 rules={{ required: "*Please select end year" }}
//                 defaultValue={props.educationInfo.endYear}
//               />
//             </SelectComponent>
//           </div>
//           <Divider sx={{ margin: "10px 0px" }} />
//           <BackNextBtnComponent
//             onNext={handleNext}
//             onBack={handleBack}
//             loading={loading}
//             tab={props.tab}
//             nextTitle={"Next"}
//             backTitle={"Back"}
//           />
//         </form>
//       )}
//     </Paper>
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
import { Divider, MenuItem, Paper, Select, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./EducationComponent.css";
import {
  BackNextBtnComponent,
  SelectComponent,
  InputComponent,
} from "../../Pages/index";
import { connect } from "react-redux";
import {
  addEducation,
  editEducation,
  deleteEducation,
} from "../../Redux/Actions/actions";
import { useForm, Controller } from "react-hook-form";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddEducation: () => dispatch(addEducation()),
  onEditEducation: (education) => dispatch(editEducation(education)),
  onDeleteEducation: (id) => dispatch(deleteEducation(id)),
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

const EducationComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const folio = JSON.parse(localStorage.getItem("myPortfolio"));
  const edit = JSON.parse(localStorage.getItem("edit"));
  console.log(portfolio);

  useEffect(() => {
    if (edit) {
      setPortfolio(folio[0].educationInfo);
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
    setLoading(true);
    // Save or process data here
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const { transcript, resetTranscript } = useSpeechRecognition({
    language: "en-US",
    continuous: true,
  });

  const handleListen = (status) => {
    SpeechRecognition.startListening();
    if (status === "domain") {
      props.onEditEducation({ ...props.educationInfo, domain: transcript });
    } else if (status === "university") {
      props.onEditEducation({ ...props.educationInfo, university: transcript });
    } else if (status === "degree") {
      props.onEditEducation({ ...props.educationInfo, degree: transcript });
    }
  };

  const handleAddEducation = () => {
    props.onAddEducation();
  };

  const handleDeleteEducation = (id) => {
    props.onDeleteEducation(id);
  };

  return (
    <Paper className="education-paper" elevation={3}>
      <h2 className="education-heading">Education Details</h2>
      <Divider sx={{ margin: "10px 0px" }} />

      {!edit && (
        <form onSubmit={handleSubmit(handleNext)}>
          {props.educationInfo.map((edu, index) => (
            <div key={edu.id} className="education-form-cont">
              <div className="flex space-x-2">
                <InputComponent
                  title={"Domain"}
                  type={"text"}
                  name={`domain-${edu.id}`}
                  register={register}
                  multiline={false}
                  value={edu.domain}
                  setValue={(value) =>
                    props.onEditEducation({ ...edu, domain: value })
                  }
                  error={errors[`domain-${edu.id}`] ? true : false}
                  errorMessage={
                    errors[`domain-${edu.id}`]
                      ? errors[`domain-${edu.id}`].message
                      : null
                  }
                />
                <div
                  className="flex justify-center items-center cursor-pointer mt-4"
                  onClick={() => handleListen("domain")}
                >
                  <img src={require("../../images/mic.png")} />
                </div>
              </div>
              <div className="flex space-x-2">
                <InputComponent
                  title={"University"}
                  type={"text"}
                  name={`university-${edu.id}`}
                  register={register}
                  multiline={false}
                  value={edu.university}
                  setValue={(value) =>
                    props.onEditEducation({ ...edu, university: value })
                  }
                  error={errors[`university-${edu.id}`] ? true : false}
                  errorMessage={
                    errors[`university-${edu.id}`]
                      ? errors[`university-${edu.id}`].message
                      : null
                  }
                />
                <div
                  className="flex justify-center items-center cursor-pointer mt-4"
                  onClick={() => handleListen("university")}
                >
                  <img src={require("../../images/mic.png")} />
                </div>
              </div>
              <div className="flex space-x-2">
                <InputComponent
                  title={"Degree"}
                  type={"text"}
                  name={`degree-${edu.id}`}
                  register={register}
                  multiline={false}
                  value={edu.degree}
                  setValue={(value) =>
                    props.onEditEducation({ ...edu, degree: value })
                  }
                  error={errors[`degree-${edu.id}`] ? true : false}
                  errorMessage={
                    errors[`degree-${edu.id}`]
                      ? errors[`degree-${edu.id}`].message
                      : null
                  }
                />
                <div
                  className="flex justify-center items-center cursor-pointer mt-4"
                  onClick={() => handleListen("degree")}
                >
                  <img src={require("../../images/mic.png")} />
                </div>
              </div>
              <SelectComponent
                title={"Start Year"}
                errorMessage={
                  errors[`startYear-${edu.id}`]
                    ? errors[`startYear-${edu.id}`].message
                    : null
                }
                error={errors[`startYear-${edu.id}`] ? true : false}
              >
                <Controller
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        props.onEditEducation({
                          ...edu,
                          startYear: e.target.value,
                        });
                      }}
                      error={errors[`startYear-${edu.id}`] ? true : false}
                    >
                      {years.map((year, index) => (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  name={`startYear-${edu.id}`}
                  control={control}
                  rules={{ required: "*Please select start year" }}
                  defaultValue={edu.startYear}
                />
              </SelectComponent>
              <SelectComponent
                title={"End Year"}
                errorMessage={
                  errors[`endYear-${edu.id}`]
                    ? errors[`endYear-${edu.id}`].message
                    : null
                }
                error={errors[`endYear-${edu.id}`] ? true : false}
              >
                <Controller
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        props.onEditEducation({
                          ...edu,
                          endYear: e.target.value,
                        });
                      }}
                      error={errors[`endYear-${edu.id}`] ? true : false}
                    >
                      {years.map((year, index) => (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  name={`endYear-${edu.id}`}
                  control={control}
                  rules={{ required: "*Please select end year" }}
                  defaultValue={edu.endYear}
                />
              </SelectComponent>
              <Button
                variant="contained"
                className="h-12 w-44 mt-3"
                onClick={() => handleDeleteEducation(edu.id)}
              >
                Delete
              </Button>
              <Divider sx={{ margin: "20px 0" }} />
            </div>
          ))}
          <Button
            variant="contained"
            className="mb-4"
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
          <div className="btn-cont flex justify-between">
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Next
            </Button>
          </div>
        </form>
      )}
      {edit && (
        <form onSubmit={handleSubmit(handleNext)}>
          {props.educationInfo.map((educate, index) => {
            return (
              <>
                {portfolio.length > 0 &&
                  portfolio.map((edu, index) => (
                    <div key={edu.id} className="education-form-cont">
                      <div className="flex space-x-2">
                        <InputComponent
                          title={"Domain"}
                          type={"text"}
                          name={`domain-${edu.id}`}
                          register={register}
                          multiline={false}
                          value={educate.domain||edu.domain}
                          setValue={(value) =>
                            props.onEditEducation({ ...educate, domain: value })
                          }
                          error={errors[`domain-${edu.id}`] ? true : false}
                          errorMessage={
                            errors[`domain-${edu.id}`]
                              ? errors[`domain-${edu.id}`].message
                              : null
                          }
                        />
                        <div
                          className="flex justify-center items-center cursor-pointer mt-4"
                          onClick={() => handleListen("domain")}
                        >
                          <img src={require("../../images/mic.png")} />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <InputComponent
                          title={"University"}
                          type={"text"}
                          name={`university-${edu.id}`}
                          register={register}
                          multiline={false}
                          value={educate.university||edu.university}
                          setValue={(value) =>
                            props.onEditEducation({ ...educate, university: value })
                          }
                          error={errors[`university-${edu.id}`] ? true : false}
                          errorMessage={
                            errors[`university-${edu.id}`]
                              ? errors[`university-${edu.id}`].message
                              : null
                          }
                        />
                        <div
                          className="flex justify-center items-center cursor-pointer mt-4"
                          onClick={() => handleListen("university")}
                        >
                          <img src={require("../../images/mic.png")} />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <InputComponent
                          title={"Degree"}
                          type={"text"}
                          name={`degree-${edu.id}`}
                          register={register}
                          multiline={false}
                          value={educate.degree||edu.degree}
                          setValue={(value) =>
                            props.onEditEducation({ ...educate, degree: value })
                          }
                          error={errors[`degree-${edu.id}`] ? true : false}
                          errorMessage={
                            errors[`degree-${edu.id}`]
                              ? errors[`degree-${edu.id}`].message
                              : null
                          }
                        />
                        <div
                          className="flex justify-center items-center cursor-pointer mt-4"
                          onClick={() => handleListen("degree")}
                        >
                          <img src={require("../../images/mic.png")} />
                        </div>
                      </div>
                      <SelectComponent
                        title={"Start Year"}
                        errorMessage={
                          errors[`startYear-${edu.id}`]
                            ? errors[`startYear-${edu.id}`].message
                            : null
                        }
                        error={errors[`startYear-${edu.id}`] ? true : false}
                      >
                        <Controller
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onChange={(e) => {
                                field.onChange(e);
                                props.onEditEducation({
                                  ...edu,
                                  startYear: e.target.value,
                                });
                              }}
                              error={
                                errors[`startYear-${edu.id}`] ? true : false
                              }
                            >
                              {years.map((year, index) => (
                                <MenuItem key={index} value={year}>
                                  {year}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                          name={`startYear-${edu.id}`}
                          control={control}
                          rules={{ required: "*Please select start year" }}
                          defaultValue={edu.startYear}
                        />
                      </SelectComponent>
                      <SelectComponent
                        title={"End Year"}
                        errorMessage={
                          errors[`endYear-${edu.id}`]
                            ? errors[`endYear-${edu.id}`].message
                            : null
                        }
                        error={errors[`endYear-${edu.id}`] ? true : false}
                      >
                        <Controller
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onChange={(e) => {
                                field.onChange(e);
                                props.onEditEducation({
                                  ...edu,
                                  endYear: e.target.value,
                                });
                              }}
                              error={errors[`endYear-${edu.id}`] ? true : false}
                            >
                              {years.map((year, index) => (
                                <MenuItem key={index} value={year}>
                                  {year}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                          name={`endYear-${edu.id}`}
                          control={control}
                          rules={{ required: "*Please select end year" }}
                          defaultValue={edu.endYear}
                        />
                      </SelectComponent>
                      <Button
                        variant="contained"
                        className="h-12 w-44 mt-3"
                        onClick={() => handleDeleteEducation(edu.id)}
                      >
                        Delete
                      </Button>
                      <Divider sx={{ margin: "20px 0" }} />
                    </div>
                  ))}
              </>
            );
          })}
          <Button
            variant="contained"
            className="mb-4"
            onClick={handleAddEducation}
          >
            Add Education
          </Button>
          <div className="btn-cont flex justify-between">
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Next
            </Button>
          </div>
        </form>
      )}
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
