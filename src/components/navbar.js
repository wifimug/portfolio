import * as React from "react"
import { Link } from "gatsby"
import "./layout.css";

export const NavBar = () => {

    return(
      <div className="navbar-color">
        <div className="navbar-links">
          
          <ul>
            <li><Link to="/"><h1>portfolio</h1></Link></li>
            <li><Link to="/about">ding</Link></li>
          </ul>
          
          
        </div>
      </div>
    )
}