import { GET_ALL_USERS, USERS_LOADING } from "./types";
import axios from "axios";

export const fetchUsers = () => dispatch => {
	dispatch(setUsersLoading());
	axios
		.get("http://localhost:5000/users")
		.then(res => {
			dispatch({
				type: GET_ALL_USERS,
				payload: res.data.users
			});
		})
		.catch(() => dispatch({ type: GET_ALL_USERS, payload: [] }));
	// dispatch({ type: GET_ERRORS, payload: err.response.data })
};

export const setUsersLoading = () => {
	return {
		type: USERS_LOADING
	};
};
