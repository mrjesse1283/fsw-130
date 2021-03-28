import { v4 as uuidv4 } from 'uuid'

const redux = require('redux')
const { createStore } = redux

export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}
export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
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
        name: "Gladiator",
        id: uuidv4()
    }
]

function movieReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_MOVIE":

            return [...state.movies, action.payload]

        // [...state, action.movie]

        case "REMOVE_MOVIE":
            const updatedArr = state.filter(movie => {
                console.log(movie, action.payload)
                return movie.id !== action.payload.id
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
    movieReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    console.log(store.getState())
})
export default store

module.exports = {
    movieReducer,
    addMovie,
    // getMovies,
    removeMovie
}
// let addMovie = document.getElementById('addMovie')
// addMovie.addEventListener('click', (e) => {
//     e.preventDefault()
//     var inputTitle = document.getElementById('name').value
//     // var inputAge = document.getElementById('age').value
//     store.dispatch(addPerson({
//         title: inputTitle
//         // age: inputAge
//     }))
//     var lists = document.getElementById('movieList')

//     var li = document.createElement('li')
//     li.textContent = `Movie: ${inputTitle}`;
//     var removeBtn = document.createElement('button')
// //add id to an added element in js    
//     removeBtn.setAttribute('id','removeBTN')
//     removeBtn.textContent = " x",

//     lists.append(li)
//     li.append(removeBtn)
// //remove action
//     removeBtn.addEventListener('click', (x) => {
//         li.remove()
//         store.dispatch(removePerson({
//             title: inputTitle
//             // age: inputAge
//         }))
//     })
// })

