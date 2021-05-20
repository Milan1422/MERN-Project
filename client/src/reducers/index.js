import { combineReducers } from "redux";

import authReducer from "./authReducer";
import uiReducer from "./frontEndReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  status: statusReducer,
});
