import React from 'react'
import { ThingConsumer } from "./thingContext"

function Form() {

    // (prevMovies => [...prevMovies, {name:name, price:price}])
    // props.reset()
    // e.reset();
    // }
    // }


    return (

        <ThingConsumer>
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
                        <button onSubmit={context.deleteBtn} >[X]</button>
                    </form>

                )
            }
            }
        </ThingConsumer>



    )
}

export default Form;



// import React from 'react'
// import { ThingConsumer } from './thingContext'

// function Form() {

//     return (
//         <ThingConsumer>

//             <form>
//                 <input
//                     type="text"
//                      />
//                 <input
//                     type="text"
//                      />
//                 <input
//                     type="text"
//                      />
//                 <br />
//                 <button>Add</button>
//             </form>

//         </ThingConsumer>

//     )
// }

// export default Form;
// constructor(props) {
//     super(props);
//     this.state = {
//         name: '',
//         url: '',
//         details: ''
//     }

// }