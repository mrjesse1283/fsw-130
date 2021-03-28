
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'



class ShowForm extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    handleChange = e => {
        e.preventDefault()
        const newTitle = { ...this.state, name: e.target.value }
        this.setState({ name: newTitle })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.name)
        this.props.dispatch(actions.addShow(this.state.name))
        this.setState({ name: { name: "" } })
    }
    handleDelete = (e) => {
        this.props.dispatch(actions.removeShow(e.target.id))

    }
    render() {
        return (

            <div className="showList">

                <form className='input' onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name.name}
                        placeholder='Enter Title here'
                        onChange={this.handleChange}
                    />
                    <button id="enBtn">Enter</button>
                </form>

                <h2 id="showHeader">TV SHOWS: </h2>

                <div className='list' >
                    {this.props.show.map((show, index) => (
                        <h1 className='list-item' key={show.name} >{show.name}
                            <button className="delBtn" id={index} onClick={this.handleDelete}>Delete</button>
                        </h1>
                    ))}
                </div>


            </div>
        )

    }


}

const mapStateToProps = (state) => {
    console.log(state.show)
    return {
        show: state.show
    }

}
export default connect(mapStateToProps)(ShowForm)