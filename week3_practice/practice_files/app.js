const { builtinModules } = require("module")
const redux = require("redux")

function increment() {
    return {
        min: "INCREMENT",
        sec: "INCREMENT"
    }
}
function decrement() {
    return {
        min: "DECREMENT",
        sec: "DECREMENT"
    }
}

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

module.exports= {increment,decrement,reducer}




// if (action.type === "INCREMENT") {
//     return {
//         count: state.count + 1
//     }
// }else if (action.type === "DECREMENT"){
//     return {               
//      count: state.count - 1
//     }
// }