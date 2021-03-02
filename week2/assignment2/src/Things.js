import React, { Component } from 'react';

import { ThingConsumer } from './thingContext';



export default class UglyList extends Component {
    render() {
        return (
            
            <ThingConsumer>
                {({ state:{movies} }) => (
                    <div className="movies">
                        {movies.map((movie) => {
                            return (
                                <div key={movie.id}>
                                    <h2>{movie.name}</h2>
                                    <h3>{movie.price}</h3>
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