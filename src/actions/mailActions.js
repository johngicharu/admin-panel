import { GET_ERRORS, SEND_MAIL } from "./types";
import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

export const sendEmails = mailData => dispatch => {
  axios
    .post("http://localhost:5000/mail/send", mailData)
    .then(res => {
      const { data } = res.data;

      dispatch({ type: SEND_MAIL, payload: data });
    })
    .catch(() => dispatch({ type: GET_ERRORS, payload: {} }));
  // dispatch({ type: GET_ERRORS, payload: err.response.data })
};
