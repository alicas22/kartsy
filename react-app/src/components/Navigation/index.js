import React, { useState }  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
	const history= useHistory()

	const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/search?q=${query}`)
		const data = await response.json();
        setResults(data);
		// history.push('/search')
    };


	return (
		<ul>
			<li>
				<NavLink exact to="/products">Home</NavLink>
			</li>
			<form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
            {/* <ul>
                {results.map(result => (
                    <li key={result.id}>{result.column_name}</li>
                ))}
            </ul> */}
        	</form>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>

	);
}

export default Navigation;
