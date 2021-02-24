
import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Nav";
import "./index.css";
import { ThemeContext, themes } from "./ThemeContext";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: themes.light,
      toggleTheme: this.toggleTheme,
    };
    this.toggleTheme = () => {
      this.setState((state) => ({
        currentTheme: state.currentTheme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }
  // static contextType = ThemeContext;
  render() {
    // console.log(themes);
    // const theme = this.context  

    
    // function App() {
//   const [theme, setTheme] = useState(themes.light);
//   const toggleTheme = () => {
//     setTheme((state) =>
//       state === themes.dark ? themes.light : themes.dark
//     );
//   };
return (
    <div>
      <Navbar />
      <ThemeContext.Provider
        value={{
          themeVal: this.state.currentTheme,
          toggleTheme: this.toggleTheme,
          
        }}
      >
        <Main />
        <Button />
      </ThemeContext.Provider>
        <Footer />
    </div>
  );
}
}
export default App;



// import { React, useState } from 'react'
// import Nav from './Nav'
// import Footer from './Footer'
// import Main from './Main'
// import Button from './Button'

// // import './App.css';
// import { ThemeContext, themes } from './themeContext';

// function App() {
//   const [theme, setTheme] = useState(themes.light)
//   const toggleTheme = () => {
//     setTheme((change) => (change === themes.dark ? themes.light : themes.dark))
//   }

//   return (
//     <div className="App">

//       <Nav />
//       <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
//         <Main />
//         <Button />
//       </ThemeContext.Provider>
//       <hr />
//       <Footer />
//     </div>
//   );
// }

// export default App;