import React from "react";
import { NavLink, } from "react-router-dom";

import "./header.css";

class Header extends React.Component {  
  render() {
    return (
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/news" activeClassName="active">news</NavLink>
          </li>
          <li>
            <NavLink to="/news/10" activeClassName="active">news</NavLink>
          </li>
          <li>
            <NavLink to="/topics" activeClassName="active">topics</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;