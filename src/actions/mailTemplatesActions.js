import {
  GET_ERRORS,
  GET_MAIL_TEMPLATES,
  CREATE_MAIL_TEMPLATE,
  UPDATE_MAIL_TEMPLATE,
  DELETE_MAIL_TEMPLATES
} from "./types";
import axios from "axios";

export const fetchTemplates = templateName => dispatch => {
  axios
    .get(
      "http://localhost:5000/mail/templates",
      templateName ? templateName : undefined
    )
    .then(res => {
      const { data } = res.data;
      dispatch({ type: GET_MAIL_TEMPLATES, payload: data });
    })
    .catch(() => dispatch({ type: GET_MAIL_TEMPLATES, payload: {} }));
};

export const createTemplate = templateData => dispatch => {
  axios
    .post("http://localhost:5000/mail/templates", templateData)
    .then(res => {
      const { data } = res.data;
      dispatch({ type: CREATE_MAIL_TEMPLATE, payload: data });
    })
    .catch(() => dispatch({ type: GET_ERRORS, payload: {} }));
};

export const updateTemplates = templateData => dispatch => {
  axios
    .patch("http://localhost:5000/mail/templates", templateData)
    .then(res => {
      const { data } = res.data;
      dispatch({ type: UPDATE_MAIL_TEMPLATE, payload: data });
    })
    .catch(() => dispatch({ type: GET_ERRORS, payload: {} }));
};

export const deleteTemplates = templateId => dispatch => {
  axios
    .delete(
      "http://localhost:5000/mail/templates",
      templateId ? templateId : undefined
    )
    .then(res => {
      const { data } = res.data;
      dispatch({ type: DELETE_MAIL_TEMPLATES, payload: data });
    })
    .catch(() => dispatch({ type: GET_ERRORS, payload: {} }));
};
