import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <div className="login-modal-container">
      <div className="login-modal-h2-register-container">
        <h2>Sign in</h2>
        <div className="login-modal-signup-modal-container">
              <div className="login-modal-register-modal-button">
                <span className="actual-modal-button">
                <OpenModalButton
                buttonText="Register"
                modalComponent={<SignupFormModal />}
                />
                </span>
              </div>
        </div>
      </div>
      <form className='login-modal-form' onSubmit={handleSubmit}>
        <ul className="validation-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <label>
          Email address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="login-modal-submit-button" type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
