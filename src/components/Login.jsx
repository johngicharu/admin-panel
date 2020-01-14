import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { Redirect } from "react-router-dom";

const Login = props => {
	const [state, setState] = useState({ email: "", password: "" });

	const handleChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	const handleLogin = e => {
		e.preventDefault();
		props.loginUser({ email: state.email, password: state.password });
	};

	return props.auth.isAuthenticated ? (
		<Redirect to="/" />
	) : (
		<div className="login">
			<h1>Travel TNG Login</h1>
			<form className="login-form" onSubmit={handleLogin}>
				<div className="form-control">
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
