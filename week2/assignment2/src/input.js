import React from 'react'
import { ThingConsumer } from "./thingContext"

function Form() {

    return (

        <ThingConsumer>

            {(context) => {
                console.log("I am the context")
                return (
                    <form >
                        <input
                            type="text"
                            name="name"
                            vaule={context.state.name}
                            placeholder="Thing "
                            onChange={context.addName}
                        />
                        <br />
                        <input
                            type="text"
                            name="price"
                            value={context.state.desc}
                            placeholder="Details"
                            onChange={context.addDesc}
                        />
                        <br />
                        <input
                            type="url"
                            name="Url"
                            value={context.state.image}
                            placeholder="Add Image here"
                            onChange={context.addUrl}
                        />
                        <br />
                        <button onClick={context.addThing}>Enter</button>

                    </form>

                )
            }
            }
        </ThingConsumer>



    )
}

export default Form;


