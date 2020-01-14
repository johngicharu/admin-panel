import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import usersReducer from "./usersReducer";
import mailReducer from "./mailReducer";
import mailTemplateReducer from "./mailTemplateReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  users: usersReducer,
  mail: mailReducer,
  mailTemplates: mailTemplateReducer
});
