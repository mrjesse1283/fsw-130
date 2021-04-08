
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MovieForm from './components/MovieForm'
import ShowForm from './components/ShowForm'
import Nav from './components/Nav'
// import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Nav />

      <div>
      
      </div>

      <Switch>
      {/* <Route exact path="/home">
        <Home /> */}
      <Route exact path="/movies">
        <MovieForm />
      </Route>
      <Route exact path="/shows">
        <ShowForm />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
