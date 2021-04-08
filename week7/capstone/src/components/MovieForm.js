import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import { Link } from "react-router-dom"

console.log(actions)

class MovieForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image: ""

        }
    }
    // const [input, setInput] = useState({name:""})

    handleChange = (e) => {
        e.preventDefault()
        // const newThing = {
        //     ...this.state,
        //     name: e.target.value,
        
        // }
        this.setState({ [e.target.name]: e.target.value })
        // const newTitle = { ...input, name: e.target.value }
        // setInput({ name: newTitle })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        this.props.dispatch(actions.addMovie(this.state))
        this.setState({ name: "", image: "" })
    }
    handleDelete = (e) => {
        this.props.dispatch(actions.removeMovie(e.target.id))

    }


    render() {
        return (
            <div>
                <Link className="link1" id="idLink1" to="/">
                    HOME:
                </Link>
                <div className="movieList">

                    <form
                        className='movieForm'
                        onSubmit={this.handleSubmit}
                    >

                        <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            placeholder='Enter Title here'
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='image'
                            value={this.state.image}
                            placeholder='URL'
                            onChange={this.handleChange}
                        />

                        <button id="enBtn">Enter</button>

                    </form>


                    <h1 id="movieHeader"> ~Movies~</h1>

                    <div className='list' >
                        {this.props.movie.map((movie, index) => (
                            <div className='list-item' key={movie.name} >
                                <h1>{movie.name}
                                    <br /><img src={movie.image} alt="" />
                                </h1>
                                <button className="delBtn" id={index} onClick={this.handleDelete}>Delete</button>
                            </div>

                        ))}
                    </div>

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
