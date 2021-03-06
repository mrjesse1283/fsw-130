const redux = require("redux")
const { combineReducers, createStore } = redux
const { addMovie, removeMovie, getMovies, movieReducer } = require("../assignment2/src/redux/movie.js") 
const { addShow, removeShow, showReducer, getShows }  = require("../assignment2/src/redux/show.js")

const rootReducer = combineReducers({
    Movies: movieReducer,
    Shows: showReducer,
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})
//add Movies
store.dispatch(addMovie('Avengers'))
store.dispatch(addMovie('Pulp Fiction'))
store.dispatch(addMovie('Toy Story'))
store.dispatch(addMovie('John Wick'))
store.dispatch(addMovie('Aladdin'))

//add Shows
store.dispatch(addShow('Friends'))
store.dispatch(addShow('Lucifer'))
store.dispatch(addShow('New Girl'))
store.dispatch(addShow('Handy Manny'))
store.dispatch(addShow('Sniper'))

//remove
store.dispatch(removeMovie('Aladdin'))
store.dispatch(removeShow('Friends'))

// Get all
store.dispatch(getMovies())
store.dispatch(getShows())



