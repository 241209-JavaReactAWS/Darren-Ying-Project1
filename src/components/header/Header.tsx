// Header react component
// make a class component
// TS class that contains render methods that return tsx
// import header.css

import React from "react";
import "./header.css"
class Header extends React.Component{
    // normal ts class
    // render method


    render(){
        return(
            <header>
                <h1>Welcome to Our Dog Shelter!</h1>
            </header>
        )
    }
}

export default Header;
//This allows this class to be an unusable component in other places