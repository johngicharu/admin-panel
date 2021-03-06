import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:5000/auth/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("auth", token);

      setAuthToken(token);

      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
  // dispatch({ type: GET_ERRORS, payload: err.response.data })
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem("auth");

  // remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
