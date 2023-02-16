import React, { useState, createContext } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {

    const searchRes = useSelector((state) => state.search.searchResults)
    if (!searchRes) return null
    if (searchRes.undefined.name == null) return <h1>no results found</h1>

    return searchRes && (
        <>
            <h1> Here are your search results: </h1>
            <ul>
                {searchRes.undefined.map((result, index) => <li key={index}>{result.name}

                </li>

                )}
            </ul>
        </>
    )
}

        //   <div>
        //     {results.map((result) => (
        //       <div key={result.id}>{result.title}</div>
        //     ))}
        //   </div>
        // );


export default Search;
