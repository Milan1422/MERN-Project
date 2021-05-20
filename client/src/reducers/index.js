import { combineReducers } from "redux";

import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  status: statusReducer,
});
