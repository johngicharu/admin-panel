import { SEND_MAIL } from "../actions/types";

const initialState = {
  mailSendResponse: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MAIL:
      return {
        ...state,
        mailSendResponse: action.payload
      };
    default:
      return state;
  }
}
