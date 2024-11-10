//types of actions are defined which triggers from the view and change the state/props via store help
//store is  centralization of all the states.

export const selectTemplate = (id) => ({
  type: "SELECTTEMPLATE",
  payload: id,
});

export const selectResume = (id) => ({
  type: "SELECTRESUME",
  payload: id,
});

export const addPersonalInfo = (details) => ({
  type: "ADDPERSONALINFO",
  payload: details,
});

export const addExperience = (experience) => ({
  type: "ADDEXPERIENCE",
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: "ADDALLEXPERIENCE",
  payload: experiences,
});

export const addNewSkills = () => ({
  type: "ADDNEWSKILLS",
  payload: null,
});

export const editSkill = (skills) => ({
  type: "EDITSKILL",
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: "DELETESKILL",
  payload: id,
});

// export const addEducation = (details) => ({
//   type: "ADDEDUCATION",
//   payload: details,
// });
export const addEducation = () => ({
  type: "ADDEDUCATION",
  payload: null,
});

export const editEducation = (education) => ({
  type: "EDITEDUCATION",
  payload: education,
});

export const deleteEducation = (id) => ({
  type: "DELETEEDUCATION",
  payload: id,
});

// Action creators for projects

export const addProject = () => ({
  type: "ADDPROJECT",
  payload: null, // No payload needed for adding a new project entry
});

// export const editProject = (id, projectName, projectUrl) => ({
//   type: "EDITPROJECT",
//   payload: { id, projectName, projectUrl },
// });
export const editProject = (projects) => ({
  type: "EDITPROJECT",
  payload: projects,
});

export const deleteProject = (id) => ({
  type: "DELETEPROJECT",
  payload: id,
});

