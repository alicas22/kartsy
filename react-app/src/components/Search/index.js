import React, { useState, createContext } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {

    const searchRes = useSelector((state) => state.search)
    if (!searchRes) return null
    const searchArr = Object.values(searchRes)

    console.log('search results from component', searchArr)
    if (!searchArr.length) return <h1>No results</h1>

    return searchRes && (
        <>
            <h1> Here are your search results: </h1>
            <ul>
                {searchArr.map((result, index) => <li key={index}>{result.name}

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
