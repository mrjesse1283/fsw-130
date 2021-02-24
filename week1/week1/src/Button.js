
import React from "react";
import { ThemeContext } from "./ThemeContext";
class Button extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div id="btnLoc">
            <button id="btn" style={theme} onClick={toggleTheme}>
              Change Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Button;








// import React, {Component} from 'react'
// import ThemeContext from './themeContext'

// class Button extends Component (){
//     render(){
//         return (
//             <ThemeContext.Consumer>
//                 {({theme, toggleTheme}) => (
//                     <button onclick={toggleTheme}  style={theme.theme}></button>
//                 )}
//             </ThemeContext.Consumer>
//         )
//     }
// }

// export default Button
