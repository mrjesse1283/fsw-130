import React from 'react'
import UglyList from './Things'
import Form from './input'
import Header from './Header'
// import { MovieProvider } from './MovieContext'
import './App.css';
import ThingContextProvider from './thingContext';

function App() {
  return (
    <div className="App">
        <Header />
            <ThingContextProvider>
              <Form />
              <UglyList />
            </ThingContextProvider>

    </div>
  );
}

export default App;




