import { GET_ALL_USERS, USERS_LOADING } from "../actions/types";
// import isEmpty from "../validation/isEmpty";

const initialState = {
	usersLoading: false,
	users: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USERS_LOADING:
			return {
				...state,
				usersLoading: true
			};

		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
				usersLoading: false
			};

		default:
			return state;
	}
};
