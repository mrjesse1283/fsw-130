import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext();


export default class ThingContextProvider extends Component {

    constructor() {

        super();
        this.state = {
            name: "",
            desc: "",
            image: "",
            editing: false,

            UglyThings: [
                {
                    id: 1,
                    name: "Ugly Dog",
                    desc: "Wow what a wierd looking dog",
                    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dWdseSUyMGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"

                },
                {
                    id: 2,
                    name: "Ugly Car",
                    desc: "So ugly someone just left it on the side of the road!",
                    image: "https://images.unsplash.com/photo-1610047217419-bb8cd1ccdd7f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dWdseSUyMGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"

                },
                {
                    id: 3,
                    name: "Ugly Senior Photo",
                    desc: "How crazy to look back at high school",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekbR70_hrlgbrs093t__XkNS7_HbDwtefNw&usqp=CAU"

                },

            ]
        }

    }
    //end of constructor function

    addName = (e) => {
        this.setState({ name: e.target.value });
    }
    addDesc = (e) => {
        this.setState({ desc: e.target.value });
    }
    addUrl = (e) => {
        this.setState({ image: e.target.value });
    }
    
    addThing = (e) => {
        e.preventDefault();
        // console.log("i was clicked")
        this.setState(prevState => ({
            UglyThings: [...prevState.UglyThings,
                 {name: this.state.name, 
                 desc: this.state.desc, 
                 image: this.state.image,
                 id: this.state.UglyThings.length +1}]

        
        }))
        this.setState({  UglyThings: [...this.state.UglyThings, 
            {name: this.state.name, 
            desc: this.state.desc, 
            image: this.state.image,
            id: this.state.UglyThings.length +1}] })
        
    }
    deleteBtn = (event) => {
        console.log(event.target)
        this.setState(prevState => ({
        UglyThings: prevState.UglyThings.filter(thing => {
            console.log(thing);
            return event.target.id != thing.id
            })
        }))
    }
    editThing = (e) => {
        console.log(e)
        this.setState(x => ({
            x, editing: true, id: e.target.id, name: e.target.name, desc: e.target.desc })
        )}


    render() {

        return (
            <Provider value={{
                state: this.state,
                addName: this.addName,
                addDesc: this.addDesc,
                addUrl: this.addUrl,
                addThing: this.addThing,
                deleteBtn: this.deleteBtn,
                editThing: this.editThing
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThingContextProvider, Consumer as ThingConsumer }
