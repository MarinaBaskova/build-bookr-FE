import React from 'react';
import { connect } from 'react-redux';
import { registerSuccess } from '../../actions';

class Register extends React.Component {
	state = {
		registerCred: {
			username: '',
			firstName: '',
			lastName: '',
			password: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			registerCred: {
				...this.state.registerCred,
				[e.target.name]: e.target.value
			}
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registerSuccess(this.state.registerCred).then(() => {
			this.props.history.push('/protected');
		});
	};
	render() {
		return (
			<div className="Register-Wrapper">
				<form className="Register-Form-Wrapper" action="" onSubmit={this.handleSubmit}>
					<h1 className="RegisterTitle">Register</h1>
					<input
						type="text"
						placeholder="username"
						name="username"
						onChange={this.handleChange}
						value={this.state.registerCred.username}
					/>
					<input
						type="text"
						placeholder="firstname"
						name="firstName"
						onChange={this.handleChange}
						value={this.state.registerCred.firstName}
					/>
					<input
						type="text"
						placeholder="lastname"
						name="lastName"
						onChange={this.handleChange}
						value={this.state.registerCred.lastName}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						onChange={this.handleChange}
						value={this.state.registerCred.password}
					/>
					<button>Register</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('MSTP', state);
	return {
		loggingIn: state.loggingIn,
		error: state.error
	};
};

export default connect(mapStateToProps, { registerSuccess })(Register);
