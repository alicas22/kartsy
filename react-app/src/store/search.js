const CREATE_SEARCH = 'search/CREATE_SEARCH'
const LOAD_SEARCH = 'search/LOAD_SEARCH'

const createSearch = (results) => ({
    type: CREATE_SEARCH,
    results
})

const loadSearch = (search) => ({
    type: LOAD_SEARCH,
    search
})

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
            newState = { ...state }
            newState.searchResults = { ...newState.search, [action.results.id]: action.results }
            return newState

        default:
            return state
    }

}

export default searchReducer
