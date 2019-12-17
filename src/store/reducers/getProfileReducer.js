import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  REQUEST_PROFILE
} from "../actions/types";
export default (
  state = { isFetching: false, didInvalidate: false },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_FAILURE:
      return { ...state, didInvalidate: true };

    case REQUEST_PROFILE:
      return { ...state, isFetching: true, didInvalidate: false };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isFetching: false,
        didInvalidate: false
      };
    default:
      return state;
  }
};
