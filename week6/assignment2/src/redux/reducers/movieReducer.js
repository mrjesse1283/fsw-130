const initialState = [
    {
        name: "Gladiator",
        // id: uuidv4()
    }
]

function movieReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_MOVIE":

            return [...state, action.payload]

        case "REMOVE_MOVIE":
            const updatedArr = state.filter((movie, index) => {
                console.log(index, action.payload)
                return index != action.payload
            })

            return updatedArr

        default:
            return state
    }
}

export default movieReducer