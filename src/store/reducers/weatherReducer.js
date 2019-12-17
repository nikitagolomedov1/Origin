import { WEATHER_INFO_SUCCESS,WEATHER_INFO_FAILURE,REQUEST_WEATHER } from "../actions/types";
export default (state = { isFetching: false, didInvalidate: false }, action) => {
  switch (action.type) {
    case WEATHER_INFO_FAILURE:
      return { ...state, didInvalidate: true};
      case REQUEST_WEATHER:
        return { ...state, isFetching: true, didInvalidate: false };
    case WEATHER_INFO_SUCCESS:
      return { ...state, payload: action.payload, isFetching: false, didInvalidate: false };
    default:
      return state;
  }
};
