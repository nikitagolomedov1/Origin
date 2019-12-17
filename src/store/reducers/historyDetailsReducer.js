import {
  REQ_HISTORY_DETAILS_SUCCESS,
  REQ_HISTORY_DETAILS_FAILURE,
  REQUEST_HISTORY_DETAILS
} from "../actions/types";
export default (
  state = { isFetching: false, didInvalidate: false },
  action
) => {
  switch (action.type) {
    case REQ_HISTORY_DETAILS_FAILURE:
      return { ...state, didInvalidate: true };
    case REQUEST_HISTORY_DETAILS:
      return { ...state, isFetching: true, didInvalidate: false };
    case REQ_HISTORY_DETAILS_SUCCESS:
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
