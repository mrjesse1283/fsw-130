import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'

console.log(actions)

class MovieForm extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    // const [input, setInput] = useState({name:""})

    handleChange = (e) => {
        e.preventDefault()
        const newTitle = { ...this.state, name: e.target.value }
        this.setState({ name: newTitle })
        // const newTitle = { ...input, name: e.target.value }
        // setInput({ name: newTitle })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        this.props.dispatch(actions.addMovie(this.state.name))
        this.setState({ name: { name: "" } })
    }
    handleDelete = (e) => {
        this.props.dispatch(actions.removeMovie(e.target.id))

    }


    render() {
        return (

            <div className="movieList">
                <form
                    className='movieForm'
                    onSubmit={this.handleSubmit}
                >

                    <input
                        type='text'
                        name='name'
                        value={this.state.name.name}
                        placeholder='Enter Title here'
                        onChange={this.handleChange}
                    />

                    <button id="enBtn">Enter</button>

                </form>
                

                    <h1 id="movieHeader">MOVIES:</h1>

                    <div className='list' >
                        {this.props.movie.map((movie, index) => (
                            <h2 className='list-item' key={movie.name} >{movie.name}
                                <button className="delBtn" id={index} onClick={this.handleDelete}>Delete</button>
                            </h2>

                        ))}
                    </div>
                

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    console.log(state.movie)
    return {
        movie: state.movie,

    }

}

export default connect(mapStateToProps,)(MovieForm)



// state={
//     movie:{
//       name:''
//     }
//   }