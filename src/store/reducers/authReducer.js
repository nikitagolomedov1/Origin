import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../../is-empty";

const INIT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};
