import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext();


export default class ThingContextProvider extends Component {

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

            ]
        }

    }
//end of constructor function

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
    deleteBtn = (event) => {
        this.setState(...prevState => ({
            movies: [""]
        }))
    }


    render() {

        return (
            <Provider value={{
                state: this.state,
                addName: this.addName,
                addPrice: this.addPrice,
                addMovie: this.addMovie,
                deleteBtn: this.deleteBtn
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThingContextProvider, Consumer as ThingConsumer }




// import React, { Component } from 'react'

// const { Provider, Consumer } = React.createContext();

// export default class ThingContextProvider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             url: '',
//             details: ''
//         }
//     }
//     handleThing = (e) => [
//         this.setState({ state: e.taget.value })
//     ]
//     addThing = (e) => {
//         this.setState({ name: e.target.value });
//     }
//     deleteThing = (e) => {
//         this.setState({ url: e.target.value });
//     }
//     editThing = (e) => {

//     }
//     render() {
//         return (
//             <Provider value={{ state: this.state }}>
//                 {this.props.children}
//             </Provider>
//         )
//     }
// }


// export { ThingContextProvider, Consumer as ThingConsumer }