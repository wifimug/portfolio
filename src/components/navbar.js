import * as React from "react"
import { Link } from "gatsby"
import "./layout.css";

export const NavBar = () => {

    return(
      <div class="navbar-color">
        <div class="navbar-links">
          
          <ul>
            <li><Link to="/"><h1>portfolio</h1></Link></li>
            <li><Link to="/about">yaxin</Link></li>
          </ul>
          
          
        </div>
      </div>
    )
}