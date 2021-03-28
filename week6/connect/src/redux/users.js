import { v4 as uuidv4 } from 'uuid'

const redux = require("redux")
const { createStore } = redux


export function addUser(user) {
    return {
        type: "ADD_USER",
        payload: user
    }
}
export function removeUser(user) {
    return {
        type: "REMOVE_USER",
        payload: user
    }
}

const initialState = [
    {
        name: "John Smith",
        id: uuidv4()
    }
]


export function userReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_USER":

            return [...state, action.payload]



        case "REMOVE_USER":

            const updatedArr = state.filter(people => {
                console.log(people, action.payload)
                return people.id !== action.payload.id
            })

            return updatedArr


        default:
            return state
    }
}

const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    console.log(store.getState())
})
export default store

