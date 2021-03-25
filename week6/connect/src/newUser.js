import React from 'react'
import { useDispatch } from 'react-redux'
// import { addUser } from './redux/users'
import { removeUser } from './redux/users'


function NewUser(props) {
    const dispatch = useDispatch()

    const delBtn =() => {
        dispatch(removeUser({ "name": name, "id": id }))
    }
    
    const { name, id } = props
    return (
        <div key={id} className="new-form">

            <h1>{name}</h1>
            <button onClick={delBtn} id="delBtn"> Delete</button>

        </div>
    )
}

// (  )=> dispatch(removeUser({ "name": name, "id": id }))
// the above function goes in the onclick delete button

export default NewUser;
