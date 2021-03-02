import React, { Component } from 'react';
// import Movie from './Movie'
import { MovieConsumer } from './MovieContext';



export default class MovieList extends Component {
    render() {
        return (
            
            <MovieConsumer>
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
            </MovieConsumer>

        )

    }
};

// export default MovieList;


// const value = useContext(MovieContext)
// const [movies, setMovies] = useState([
//     {
//         name: "Star Wars",
//         genre: "sci-fi",
//         price: "$5",
//         id: 101
//     },
//     {
//         name: "Tombstone",
//         genre: "Western",
//         price: "$5",
//         id: 102
//     },
//     {
//         name: "Gladiator",
//         genre: "Action",
//         price: "$5",
//         id: 103
//     },
//     {
//         name: "Toy Story",
//         genre: "Family",
//         price: "$5",
//         id: 104
//     }
// ]);