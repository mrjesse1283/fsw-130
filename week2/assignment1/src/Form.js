import React from 'react'
import { MovieConsumer } from "./MovieContext"

function Form() {

    // (prevMovies => [...prevMovies, {name:name, price:price}])
    // props.reset()
    // e.reset();
    // }
    // }


    return (

        <MovieConsumer>
            {(context) => {
                console.log(context)
                return (
                    <form >
                        <input
                            type="text"
                            name="name"
                            vaule={context.state.name}
                            placeholder="Movie Title"
                            onChange={context.addName} />
                        <input
                            type="text"
                            name="price"
                            value={context.state.price}
                            placeholder="Price"
                            onChange={context.addPrice} />

                        <button onClick={context.addMovie}>Enter</button>
                    </form>

                )
            }
            }
        </MovieConsumer>



    )
}

export default Form;