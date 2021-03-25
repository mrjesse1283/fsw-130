import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addUser } from './redux/users'
import { v4 as uuidv4 } from 'uuid'


function Form() {
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById("name")
        dispatch(addUser({ "name": name.value, "id": uuidv4() }))
        name.value = ""
    }

    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >
            <input

                type="text"
                placeholder="Name"
                name="name"
                // value={this.state.name}
                id="name"
            // onchange={}
            />
            <button id="addBtn">ADD</button>
        </form>
    )
}


// function mapStateToProps(state) {
//     console.log(state)
//     return {

//         name: state.name
//     }
// }


// const mapDispatchToProps = {
//     add: addUser,
//     // remove:removeUser
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Form);
export default Form;


