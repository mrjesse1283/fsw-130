import { v4 as uuidv4 } from 'uuid'

const redux = require('redux')
const { createStore } = redux

export function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}
export function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}
// function getMovies(movie) {
//     return {
//         type: "GET_MOVIES",
//         payload: movie
//     }    
// }

const initialState = [
    {
        name: "Friends",
        id: uuidv4()
    }
]

function showReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_SHOW":

            return [...state.movies, action.payload]

        // [...state, action.movie]

        case "REMOVE_SHOW":
            const updatedArr = state.filter(show => {
                console.log(show, action.payload)
                return show.id !== action.payload.id
            })

            return updatedArr
        //     const updatedArr = state.movies.filter(thing => thing !== action.payload)
        //     // console.log(updatedArr)
        //     return {
        //         ...state,
        //         movies: updatedArr
        //     }

        // case "GET_MOVIES":
        //     return {
        //         ...state
            // }

        default:
            return state
    }
}
const store = createStore(
    showReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    console.log(store.getState())
})
export default store

module.exports = {
    showReducer: showReducer,
    addShow: addShow,
    removeShow: removeShow,
    getShows: getShows
}
