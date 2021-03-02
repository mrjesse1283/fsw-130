import React from 'react'
import MovieList from './Movies'
import Form from './Form'
import Header from './Header'
// import { MovieProvider } from './MovieContext'
import './App.css';
import MovieContextProvider from './MovieContext';

function App() {
  return (
    <div className="App">
        <Header />
            <MovieContextProvider>
              <Form />
              <MovieList />
            </MovieContextProvider>

    </div>
  );
}

export default App;
