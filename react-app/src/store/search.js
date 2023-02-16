const CREATE_SEARCH = 'search/CREATE_SEARCH'
const LOAD_SEARCH = 'search/LOAD_SEARCH'
const CLEAN_SEARCH = 'search/CLEAN_SEARCH'

const createSearch = (results) => ({
    type: CREATE_SEARCH,
    results
})

const loadSearch = (search) => ({
    type: LOAD_SEARCH,
    search
})

export const cleanUpSearchAction = () => {
    return {
        type: CLEAN_SEARCH
    }
};

export const thunkCreateSearch = (query) => async (dispatch) => {
    const response = await fetch(`/api/search?q=${query}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    })
    //console.log('>>>>>>>>>response', response)
    if (response.ok) {
        const newSearch = await response.json()
        console.log('newsearch', newSearch)
        dispatch(createSearch(newSearch))
        return newSearch
    }
}

export const thunkLoadSearch = () => async (dispatch) => {
    const response = await fetch('/api/search/')

    if (response.ok) {
        const search = await response.json()
        dispatch(loadSearch(search))
        return search
    }
}

// export const thunkCleanupSearch = () => async (dispatch) => {
//     const response = await fetch('/api/search/')
//     if (response.ok) {
//         const search = await response.json()
//         dispatch(cleanSearch(search))
//         return search
//     }
// }

const normalize = (arr) => {
    const resObj = {}
    arr.forEach((ele) => { resObj[ele.id] = ele })
    return resObj
}

const initialState = {}

const searchReducer = (state = initialState, action) => {
    let newState

    switch (action.type){
        case LOAD_SEARCH:
            newState = { ...state }
            newState.searchResults = normalize(action.search)
            return newState
        case CREATE_SEARCH:
            if(Object.keys(action.results).length > 0){
                newState = { ...state }
                action.results.forEach((result) => {
                    newState[result.id] = result
                })
                return newState
            } else {
                newState = { ...state  }
                return newState
            }
        case CLEAN_SEARCH: {
            const newState = { ...initialState };
            return newState;
            }
        default:
            return state
    }

}

export default searchReducer