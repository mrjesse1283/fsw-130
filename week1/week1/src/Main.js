import React from "react";
import { ThemeContext } from "./ThemeContext";
class Main extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          return (
          <header style={context.themeVal}>
            <h2 id="mainTxt">{context.themeVal.color === "#ffffff" ? "Dark": "Light" } Theme</h2>
          </header>
        )}}
      </ThemeContext.Consumer>
    );
  }
}
export default Main;








// import {React, Component} from 'react'
// import {ThemeContext,  themes } from './themeContext'

// class Main extends Component{
//     render(){
//         return(
//             <ThemeContext.Consumer>
//                 {theme => (
//                     <h1> {theme.themes.color === "#000000" ? "Dark " : "Light"} theme </h1>
//                 )}

//             </ThemeContext.Consumer>
//         )
//     } 
// }

// export default Main

