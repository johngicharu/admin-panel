import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./css/App.css";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";

if (localStorage.auth) {
	setAuthToken(localStorage.auth);

	const decoded = jwt_decode(localStorage.auth);

	store.dispatch(setCurrentUser(decoded));
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// logout User
		store.dispatch(logoutUser());

		// TODO: Clear current profile
		// TODO: Redirect to login
		window.location.href = "/login";
	}
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<div className="container">
						<PrivateRoute path="/" component={Main} />
						<Route exact path="/login" component={Login} />
					</div>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
