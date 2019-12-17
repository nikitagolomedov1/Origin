import {
  REQ_HISTORY_LIST,
  REQ_HISTORY_FAILURE,
  REQUEST_HISTORY
} from "../actions/types";
export default (
  state = { isFetching: false, didInvalidate: false },
  action
) => {
  switch (action.type) {
    case REQ_HISTORY_FAILURE:
      return { ...state, didInvalidate: true };
    case REQUEST_HISTORY:
      return { ...state, isFetching: true, didInvalidate: false };
    case REQ_HISTORY_LIST:
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
