import React from "react";
// import { ThemeContext } from "./ThemeContext";
class Navbar extends React.Component {
  render() {
    return (
    //   <ThemeContext.Consumer>
        // {(theme) => (
          <div className="navbar">
             <a href="#">Home</a>  
             <a href="#">About</a> 
             <a href="#">Connect</a> 
          </div>
            // style={theme.theme}
        // )}
    //   </ThemeContext.Consumer>
    );
  }
}
export default Navbar;













// import React from "react"
// import ThemeContext from "./themeContext";

// class Nav extends React.Component {
//     render() {
//         return (
//             // <ThemeContext.Consumer>
//                     < >
//                       <a href="#">Home</a>  
//                       <a href="#">About</a>  
//                       <a href="#">Connect</a>  
//                     </>
//             // </ThemeContext.Consumer>
//         )    
//     }
// }

// export default Nav;

