function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
} function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}
const initialState = {
    shows: []
}


function showReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_SHOW":

            return {
                ...state,
                shows: [...state.shows, action.payload]
            }


        case "REMOVE_SHOW":
            // const arrCopy = [...state.favoriteThings]
            const updatedArr = state.shows.filter(thing => thing !== action.payload)
            // console.log(updatedArr)
            return {
                ...state,
                shows: updatedArr
            }


        default:
            return state
    }
}
module.exports = {
    showReducer: showReducer,
    addShow: addShow,
    removeShow: removeShow
}
// let addShow = document.getElementById('addShow')
// addShow.addEventListener('click', (e) => {
//     e.preventDefault()
//     var inputTitle = document.getElementById('name').value
//     // var inputAge = document.getElementById('age').value
//     store.dispatch(addPerson({
//         title: inputTitle
//         // age: inputAge
//     }))
//     var lists = document.getElementById('showList')

//     var li = document.createElement('li')
//     li.textContent = `Show: ${inputTitle}`;
//     var removeBtn = document.createElement('button')
// //add id to an added element in js    
//     removeBtn.setAttribute('id','removeBTN')
//     removeBtn.textContent = "  x",

//     lists.append(li)
//     li.append(removeBtn)
// //remove action
//     removeBtn.addEventListener('click', (x) => {
//         li.remove()
//         store.dispatch(removePerson({
//             title: inputTitle,
//             // age: inputAge
//         }))
//     })
// })