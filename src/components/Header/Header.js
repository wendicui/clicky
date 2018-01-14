import React from "react";
import "./Header.css"

const Header = props =>{
    return(
        <nav>
            <div className="nav-wrapper">
              <a className="center brand-logo">Click Game</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li> Score: {props.score}</li>
                <li>Top Score: {props.topScore}</li>
              </ul>
            </div>
          </nav>
    )

}

export default Header
