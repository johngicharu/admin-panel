import {
  GET_MAIL_TEMPLATES,
  CREATE_MAIL_TEMPLATE,
  UPDATE_MAIL_TEMPLATE,
  DELETE_MAIL_TEMPLATES
} from "../actions/types";

const initialState = {
  mailTemplatesList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MAIL_TEMPLATES:
      return {
        ...state,
        mailTemplatesList: action.payload
      };

    case CREATE_MAIL_TEMPLATE:
      return {
        ...state,
        mailTemplatesList: state.mailTemplatesList.push(action.payload)
      };

    case UPDATE_MAIL_TEMPLATE:
      return {
        ...state,
        mailTemplatesList: state.mailTemplatesList.map(template => {
          template = action.payload;
          return template;
        })
      };

    case DELETE_MAIL_TEMPLATES:
      return {
        ...state,
        mailTemplatesList: action.payload
      };

    default:
      return state;
  }
}
