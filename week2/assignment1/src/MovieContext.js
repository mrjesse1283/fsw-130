import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext();


export default class MovieContextProvider extends Component {

    constructor() {

        super();
        this.state = {
            name: "",
            price: "",
            movies: [
                {
                    name: "Star Wars",
                    genre: "sci-fi",
                    price: "$5",
                    id: 101
                },
                {
                    name: "Tombstone",
                    genre: "Western",
                    price: "$5",
                    id: 102
                },
                {
                    name: "Gladiator",
                    genre: "Action",
                    price: "$5",
                    id: 103
                },
                {
                    name: "Toy Story",
                    genre: "Family",
                    price: "$5",
                    id: 104
                }


            ]
        }


    }

    addName = (e) => {
        this.setState({ name: e.target.value });
    }
    addPrice = (e) => {
        this.setState({ price: e.target.value });
    }
    addMovie = (e) => {
        e.preventDefault();
        console.log("i was clicked")
        this.setState(prevState => ({
            movies: [...prevState.movies, { name: this.state.name, price: this.state.price, id: this.state.movies.length + 1 }]
        }))
    }
    render() {

        return (
            <Provider value={{
                state: this.state,
                addName: this.addName,
                addPrice: this.addPrice,
                addMovie: this.addMovie
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { MovieContextProvider, Consumer as MovieConsumer }