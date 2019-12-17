import auth from "../../apis/auth";
import history from "../../history";
import weatherapi from "../../apis/weatherapi";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  REQ_HISTORY_LIST,
  REQ_HISTORY_DETAILS_SUCCESS,
  WEATHER_INFO_SUCCESS,
  HISTORY_LIST_SUCCESS,
  GET_PROFILE_SUCCESS,
  EDIT_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  REQUEST_PROFILE,
  WEATHER_INFO_FAILURE,
  REQUEST_WEATHER,
  REQUEST_HISTORY,
  REQ_HISTORY_FAILURE,
  HISTORY_LIST_FAILURE,
  REQ_HISTORY_DETAILS_FAILURE,
  REQUEST_HISTORY_DETAILS
} from "./types";
import setAuthToken from "../../setAuthToken";
import jwt_decode from "jwt-decode";

export const registration = formValues => dispatch => {
  auth
    .post("/api/users/register", formValues)
    .then(response => history.push("/login"))
    .catch(error => {
      dispatch(registrationFailed(error));
    });
};

export const registrationFailed = payload => {
  return {
    type: GET_ERRORS,
    payload
  }
}
export const login = formValues => dispatch => {
  auth
    .post("/api/users/login", formValues)
    .then(response => {
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push("/weatherpage");
    })
    .catch(error => {
      dispatch(loginFailed(error));
    });
};
export const loginFailed = payload => {
  return {
    type: GET_ERRORS,
    payload
  }
}
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};

//page 3

export const weatherpage = place => {
  return dispatch => {
    dispatch(requestProfile(place));
    return weatherapi
      .get(
        `/data/2.5/forecast?lat=${place.geometry.location.lat()}&lon=${place.geometry.location.lng()}&units=metric&APPID=84d77ff44331f7f2e8fd5777a8732c61`
      )
      .then(response => {
        dispatch(weatherpageSuccess(response.data));
      })
      .catch(error => {
        dispatch(weatherpageFailed(error));
      });
  };
};

export const weatherpageSuccess = payload => {
  return {
    type: WEATHER_INFO_SUCCESS,
    payload
  };
};

export const requestWeatherpage = payload => {
  return {
    type: REQUEST_WEATHER,
    payload
  };
};

export const weatherpageFailed = payload => {
  return {
    type: WEATHER_INFO_FAILURE,
    payload
  };
};

export const makeHistory = (city, table) => {
  return dispatch => {
    return auth

      .post("/api/history/historylist", {
        city: city.name,
        date: Date(),
        table: table
      })
      .then(response => {
        dispatch(createHistorySuccess(response.data));
      })
      .catch(error => {
        dispatch(createHistoryFailed(error));
      });
  };
};

export const createHistorySuccess = payload => {
  return {
    type: HISTORY_LIST_SUCCESS,
    payload
  };
};

export const createHistoryFailed = payload => {
  return {
    type: HISTORY_LIST_FAILURE,
    payload
  };
};

// page 4

export const historyList = () => {
  return dispatch => {
    dispatch(requestHistory());
    return auth
      .get("/api/history/historylist")
      .then(response => {
        dispatch(getHistorySuccess(response.data));
      })
      .catch(error => {
        dispatch(getHistoryFailed(error));
      });
  };
};

export const getHistorySuccess = payload => {
  return {
    type: REQ_HISTORY_LIST,
    payload
  };
};

export const getHistoryFailed = payload => {
  return {
    type: REQ_HISTORY_FAILURE,
    payload
  };
};

export const requestHistory = payload => {
  return {
    type: REQUEST_HISTORY,
    payload
  };
};
//page 5

export const getHistoryDetails = id => {
  return dispatch => {
    dispatch(requestHistoryDetails(id));
    return auth
      .get(`/api/history/historylist/details/${id}`)
      .then(response => {
        dispatch(getHistoryDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(getHistoryDetailsFailed(error));
      });
  };
};

export const getHistoryDetailsSuccess = payload => {
  return {
    type: REQ_HISTORY_DETAILS_SUCCESS,
    payload
  };
};
export const getHistoryDetailsFailed = payload => {
  return {
    type: REQ_HISTORY_DETAILS_FAILURE,
    payload
  };
};

export const requestHistoryDetails = payload => {
  return {
    type: REQUEST_HISTORY_DETAILS,
    payload
  };
};
//page 6

export const editProfile = (formValues, id) => dispatch => {
  auth
    .put(`api/users/edit/${id}`, formValues)
    .then(response => dispatch(editProfileSuccess(response.data)))
    .catch(error => {
      dispatch(editProfileFailed(error));
    });
};

export const editProfileSuccess = payload => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload
  };
};

export const editProfileFailed = payload => {
  return {
    type: GET_ERRORS,
    payload
  };
};

export const getProfile = id => {
  return dispatch => {
    dispatch(requestProfile(id));
    return auth
      .get(`api/users/profile/${id}`)
      .then(response => {
        dispatch(getProfileSuccess(response.data));
      })

      .catch(error => {
        dispatch(getProfileFailed(error.response.data));
      });
  };
};
export const getProfileSuccess = payload => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload
  };
};
export const requestProfile = payload => {
  return {
    type: REQUEST_PROFILE,
    payload
  };
};

export const getProfileFailed = payload => {
  return {
    type: GET_PROFILE_FAILURE,
    payload
  };
};
