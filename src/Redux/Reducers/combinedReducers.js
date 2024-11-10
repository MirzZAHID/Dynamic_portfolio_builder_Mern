//All reducers with the methods are imported and combined with combined reducer as root reducer.
// shared with the store to change view/states

import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
  projectsReducer
} from "./reducers";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
  projectsReducer
});

export default rootReducer;
