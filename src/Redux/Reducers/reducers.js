//Initial values declared  to the reducer

const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    objective: "",
  },
};

const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};
const initialProjectsState = {
  projects: [
    {
      id: 1,
      projectName: "",
      projectUrl: "",
      desc: "",
    },
  ],
};

// const initialEducationState = {
//   educationInfo: {
//     domain: "",
//     university: "",
//     degree: "",
//     startYear: "",
//     endYear: "",
//   },
// };


const initialSkillsState = {
  skills: ["", "", ""],
};
const initialEducationState = {
  educationInfo: [
    {
      id: 1,
      domain: "",
      university: "",
      degree: "",
      startYear: "",
      endYear: "",
    },
  ],
};

export const educationDetailsReducer = (state = initialEducationState, action) => {
  switch (action.type) {
    case "ADDEDUCATION":
      return {
        ...state,
        educationInfo: [
          ...state.educationInfo,
          {
            id: state.educationInfo.length + 1,
            domain: "",
            university: "",
            degree: "",
            startYear: "",
            endYear: "",
          },
        ],
      };
    case "EDITEDUCATION":
      return {
        ...state,
        educationInfo: state.educationInfo.map((edu) =>
          edu.id === action.payload.id ? action.payload : edu
        ),
      };
    case "DELETEEDUCATION":
      return {
        ...state,
        educationInfo: state.educationInfo.filter(
          (edu) => edu.id !== action.payload
        ),
      };
    default:
      return state;
  }
};


// once action is dispatched from view reducer is triggered with the action to change state

export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case "SELECTTEMPLATE":
      return { ...state, selectedTemplateId: action.payload };
    case "SELECTRESUME":
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case "ADDPERSONALINFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case "ADDEXPERIENCE":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case "ADDALLEXPERIENCE":
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case "ADDNEWSKILLS":
      return { ...state, skills: [...state.skills, ""] };
    case "EDITSKILL": {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case "DELETESKILL": {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};

// export const educationDetailsReducer = (
//   state = initialEducationState,
//   action
// ) => {
//   switch (action.type) {
//     case "ADDEDUCATION":
//       return { ...state, educationInfo: action.payload };
//     default:
//       return state;
//   }
// };

export const projectsReducer = (state = initialProjectsState, action) => {
  switch (action.type) {
    case "ADDPROJECT":
      return {
        ...state,
        projects: [
          ...state.projects,
          { id: state.projects.length + 1, projectName: "", projectUrl: "" ,desc:""},
        ],
      };
    case "EDITPROJECT":
      return {
        ...state,
        projects: action.payload,
      };
    case "DELETEPROJECT": {
      const newProjects = state.projects.filter(
        (project, id) => id !== action.payload
      );
      return {
        ...state,
        projects: newProjects,
      };  
    }
    default:
      return state;
  }
};
