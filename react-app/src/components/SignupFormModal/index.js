import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(firstName, lastName, username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"password: Confirm Password field must be the same as the Password field",
			]);
		}
		console.log(errors)
	};

	return (
		<div className="register-modal-container">
			<h2>Create your account</h2>
			<h4>Registration is easy.</h4>
			<form onSubmit={handleSubmit}>

				{/* <ul className="validation-errors">
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul> */}
				<label>
					First Name<span style={{ color: "red" }}>*</span>
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					<div className='validation-errors'>
						{errors.filter((error) => error.includes('first')).length > 0 ? errors.filter((error) => error.includes('first'))[0].split(': ')[1] : ''}
					</div>
				</label>
				<label>
					Last Name<span style={{ color: "red" }}>*</span>
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					<div className='validation-errors'>
						{errors.filter((error) => error.includes('last')).length > 0 ? errors.filter((error) => error.includes('last'))[0].split(': ')[1] : ''}
					</div>
				</label>
				<label>
					Email<span style={{ color: "red" }}>*</span>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div className='validation-errors'>
						{errors.filter((error) => error.includes('email')).length > 0 ? errors.filter((error) => error.includes('email'))[0].split(': ')[1] : ''}
					</div>
				</label>
				<label>
					Username<span style={{ color: "red" }}>*</span>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<div className='validation-errors'>
						{errors.filter((error) => error.includes('username')).length > 0 ? errors.filter((error) => error.includes('username'))[0].split(': ')[1] : ''}
					</div>
				</label>
				<label>
					Password<span style={{ color: "red" }}>*</span>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{/* <div className='validation-errors'>
						{errors.filter((error) => error.includes('match')).length > 0 ? errors.filter((error) => error.includes('match'))[0].split(': ')[1] : ''}
					</div> */}
				</label>
				<label>
					Confirm Password<span style={{ color: "red" }}>*</span>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					<div className='validation-errors'>
						{errors.filter((error) => error.includes('same')).length > 0 ? errors.filter((error) => error.includes('same'))[0].split(': ')[1] : ''}
					</div>
				</label>
				<button className="register-modal-submit-button" type="submit">Register</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
