import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import weatherReducer from "./weatherReducer";
import historyListReducer from "./historyListReducer"
import errorReducer from "./errorReducer";
import historyDetailsReducer from "./historyDetailsReducer";
import getProfileReducer from "./getProfileReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  weatherInfo: weatherReducer,
  historyList: historyListReducer,
  historyDetails: historyDetailsReducer,
  profiles: getProfileReducer,
  errors: errorReducer
});
