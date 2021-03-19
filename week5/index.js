// const { store }= require("./redux")  
// const {createStore} = require("./redux")
// import store from "./redux"


// const redux = require("redux")
// const { combineReducers, createStore } = redux
// const { movieReducer } = require("./redux/movie.js") 
// const { showReducer }  = require("./redux/show.js")// import favoriteThingsReducer from "./favoriteThings"
// // import youTubeVideoReducer from "./youTubeVideo"

// const rootReducer = combineReducers({
//     movieReducer,
//     showReducer,
//     // favoriteThings: favoriteThingsReducer,
//     // youTubeVideo: youTubeVideoReducer
// })

// const store = createStore(rootReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })
// console.log(rootReducer)

// module.exports = {
//     store
// }

// console.log(store)


// let addMovie = document.getElementById('addMovie')
// addMovie.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log("add button")
//     var inputTitle = document.getElementById('name').value
//     // var inputAge = document.getElementById('age').value
//     store.dispatch(addPerson({
//         name: inputTitle
       
//     }))
//     var lists = document.getElementById('movieList')

//     var li = document.createElement('li')
//     li.textContent = `Movie: ${inputTitle}`;


//     var removeBtn = document.createElement('button')
//     //add id to an added element in js    
//     removeBtn.setAttribute('id', 'removeBTN')
//     removeBtn.textContent = " x",

//         lists.append(li)
//     li.append(removeBtn)

//     //remove action
//     removeBtn.addEventListener('click', (x) => {
//         li.remove()
//         store.dispatch(removePerson({
//             name: inputTitle
           
//         }))
//     })
// });


// let addShow = document.getElementById('addShow')
// addShow.addEventListener('click', (e) => {
//     e.preventDefault()
//     var inputTitle = document.getElementById('name').value
//     // var inputAge = document.getElementById('age').value
//     store.dispatch(addPerson({
//         name: inputTitle
//         // age: inputAge
//     }))
//     var lists = document.getElementById('showList')

//     var li = document.createElement('li')
//     li.textContent = `Show: ${inputTitle}`;
//     var removeBtn = document.createElement('button')
//     //add id to an added element in js    
//     removeBtn.setAttribute('id', 'removeBTN')
//     removeBtn.textContent = "  x",

//         lists.append(li)
//     li.append(removeBtn)
//     //remove action
//     removeBtn.addEventListener('click', (x) => {
//         li.remove()
//         store.dispatch(removePerson({
//             name: inputTitle
//             // age: inputAge
//         }))
//     })
// })

// const store = createStore(rootReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })
// console.log(rootReducer)