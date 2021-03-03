import React, { Component } from 'react';

import { ThingConsumer } from './thingContext';



export default class UglyList extends Component {
    render() {
        return (

            <ThingConsumer>
                {({ state: { UglyThings }, deleteBtn, editThing }) => (
                    <div className="thing">
                        {UglyThings.map((thing) => {
                            return (
                                <div className="card" key={thing.id} id="flex-container" >

                                    <img id="img" src={thing.image} alt="images" />
                                    <h1 id="title">{thing.name}</h1>
                                    <h3 id="details">{thing.desc}</h3>

                                    <button onClick={editThing}>[EDIT]</button>
                                    <button onClick={deleteBtn} id={thing.id}>[X]</button>
                                </div>
                            )
                        })
                        }
                    </div>

                )}
            </ThingConsumer>

        )

    }
};