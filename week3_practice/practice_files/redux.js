// const redux = require("redux")


// import { fchown } from "fs/promises"
// import { func } from "prop-types"
//reducer


function reducer(state, action) {
    switch (action.type) {
        case "START":
            secState.sec = state.sec.seconds
            return secState

    }
}

const state = {
    min: 0,
    sec: 0,
    running: true,
    laps: []
}
let minState = {
    min: state.min
}
let secState = {
    sec: state.sec
}
// let time = new Date()


// let seconds = getSeconds()
// let minutes = getMinutes()


// function start() {
//     return {
//         type: "START"
//         // state: timerState.min.getSeconds()
//     }
// }
// function stopBtn() {
//     return {
//         type: "STOP"
//     }
// }
// function reset() {
//     return {
//         type: "RESET"
//     }
// }

// let state = store.getState()


const store = Redux.createStore(reducer, state);
// console.log("store")


//actions
document.getElementById('startBtn')
    .addEventListener('click', () => {
        store.dispatch({ type: "START" })
    })

document.getElementById('stopBtn')
    .addEventListener('click', () => {
        store.dispatch({ type: "STOP" })
    })

document.getElementById('resettBtn')
    .addEventListener('click', () => {
        store.dispatch({ type: "RESET" })
    })