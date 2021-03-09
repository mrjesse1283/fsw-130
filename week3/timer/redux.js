const redux = require("redux")

const action = {
    type: "START_TIME"
}


function start() {
    return {
        type: "START_TIME"
    }
}
function stop() {
    return {
        type: "STOP_TIME"
    }
}


//if statements
function reducer(state = { count: 0 }, action) {
    if (action.type === "START_TIME") {
        return {
            count: state.count + 1
        }
    } else if (action.type === "STOP_TIME") {
        count: state.count + 0
    }
}

//switch statement
function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "START_TIME":
            return {
                count: state.count + 1
            }
        case "STOP_TIME":
            return { 
                count: state.count + 0
            }
        default:
            return state
    }
}
