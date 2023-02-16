import React, { useState }  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';

import { login } from "../../store/session";
import { useModal } from "../../context/Modal";
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const dispatch=useDispatch()
	const { closeModal } = useModal();

	const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
	const [errors, setErrors] = useState([]);

	const history= useHistory()
	const email = 'magic@mike.com'
	const password = 'password'

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
		  setErrors(data);
		} else {
			closeModal()
		}
	  };

	const handleSearch = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/search?q=${query}`)
		const data = await response.json();
        setResults(data);
		// history.push('/search')
    };

	let sessionLinks;
	if (sessionUser) {
	  sessionLinks = (
		<div className='nav-bar-right'>
		  {/* <div className='modal-create-group'>
		  <OpenModalButton
			buttonText="Start a new group"
			modalComponent={<CreateGroupModal />}
		  />
		</div> */}
		<div style = {{marginRight:'15px'}}>
		  <ProfileButton user={sessionUser} />
		</div>
		</div>
	  );
	} else {
	  sessionLinks = (
		<div className='button-container'>
		  <div className='demo-login' onClick = {handleSubmit}>
			Demo-Sign In
		  </div>
		  <div className='nav-bar-login-modal-button'>
			<OpenModalButton
			  buttonText="Sign In"
			  modalComponent={<LoginFormModal />}
			/>
		  </div>
		  {/* <div className='modals-logged-out'>
			<OpenModalButton
			  buttonText="Sign Up"
			  modalComponent={<SignupFormModal />}
			/>
		  </div> */}
		</div >
	  );
	}

	return (

		<div className='nav-bar-header-container'>
			<div className='nav-bar-home-button'>
				<NavLink exact to="/" activeClassName="not-going-to-be-active" style={{textDecoration: 'none', color:'#F1641E '}}>Kartsy</NavLink>
			</div>
			<div className='nav-bar-search-container'>
 				<form onSubmit={handleSearch} className='nav-bar-search-form'>
    				<div className="nav-bar-search-wrapper">
      					<input placeholder="Search for anything" className ="nav-bar-search-text-field" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      					<button type="submit" className="nav-bar-search-button">
       						 <i className="fa fa-search"></i>
      					</button>
    				</div>
  				</form>
			</div>
			<div className='nav-bar-login-signup'>
			{isLoaded && sessionLinks}
			</div>
			<div className='nav-bar-cart-icon'>
   				<NavLink to="/cart">
     				<i className="fas fa-shopping-cart"></i>
   				</NavLink>
  			</div>
		</div>


	);
}

export default Navigation;
