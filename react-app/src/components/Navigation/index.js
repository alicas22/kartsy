import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetProducts } from '../../store/products'
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';

import { login } from "../../store/session";
import { useModal } from "../../context/Modal";
import './Navigation.css';
import { cleanUpSearchAction, thunkCreateSearch } from '../../store/search';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch()
	const { closeModal } = useModal();
	const [query, setQuery] = useState('');
	const [errors, setErrors] = useState([]);
	const [autocompleteResults, setAutocompleteResults] = useState([]);

	const history = useHistory()
	const email = 'magic@mike.com'
	const password = 'password'

	//for search autofill
	useEffect(() => {
		dispatch(thunkGetProducts())
	}, [dispatch])
	const productsObj = useSelector((state) => state.products.allProducts)

	if (!productsObj) return null


	const products = Object.values(productsObj)
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

		dispatch(cleanUpSearchAction())
		dispatch(thunkCreateSearch(query))
		setQuery('')
		history.push('/search')
	};

	const handleAutocomplete = (e) => {
		const searchQuery = e.target.value;
		setQuery(searchQuery);
		const productsArr = Object.values(productsObj);
		const results = productsArr.filter((product) => {
			return product.name.toLowerCase().includes(searchQuery.toLowerCase());
		});
		setAutocompleteResults(results);
	};

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<div className='nav-bar-right'>

				<div style={{ marginRight: '15px' }}>
					<ProfileButton user={sessionUser} />
				</div>
			</div>
		);
	} else {
		sessionLinks = (
			<div className='button-container'>
				<div className='demo-login' onClick={handleSubmit}>
					Demo-Sign In
				</div>
				<div className='nav-bar-login-modal-button'>
					<OpenModalButton
						buttonText="Sign In"
						modalComponent={<LoginFormModal />}
					/>
				</div>
			</div >
		);
	}

	return (

		<div className='nav-bar-header-container' >
			<div className='nav-bar-home-button'>
				<NavLink exact to="/" activeClassName="not-going-to-be-active" style={{ textDecoration: 'none', color: '#F1641E ' }}>Kartsy</NavLink>
			</div>
			<div className='nav-bar-search-container'>
				<form onSubmit={handleSearch} className='nav-bar-search-form'>
					<div className="nav-bar-search-wrapper">
						<input
							placeholder="Search for anything"
							className="nav-bar-search-text-field"
							type="text" value={query}
							onChange={handleAutocomplete}
							onBlur={() => setAutocompleteResults([])}

						/>

						<button type="submit" className="nav-bar-search-button">
							<i className="fa fa-search"></i>
						</button>
					</div>
					{autocompleteResults.length > 0 && (
						<ul className="nav-bar-search-autocomplete">
							{autocompleteResults.map((result) => (
								<NavLink className='auto-search-link-item' to={`/products/${result.id}`} onClick={() => { setQuery(''); setAutocompleteResults([]) }}>
									<li className='auto-search-item' key={result.id}>{result.name}</li>
								</NavLink>
							))}
						</ul>
					)}
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
