
// const redux = require("redux")

import React from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser } from './redux/users'

import Form from './form'
import NewUser from './newUser'


function App(props) {
  const { users } = props
  // const newList = users.map((user) => <li>{user}</li>)
  return (
    <div className="App">
      <Form add={addUser} />
      {/* <ul>{newList}</ul> */}

      {users.map((user) => {
        return (
          <NewUser
            key={user.id}
            name={user.name}
            // remove={removeUser}
            id={user.id} />
            )
      })}

    </div>
  );
}


function mapStateToProps(globalState) {
  return {
    users: globalState
  }
}

const mapDispatchToProps = {
  add: addUser,
  remove: removeUser
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
