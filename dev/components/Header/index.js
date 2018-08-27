import React from "react";
import {HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

class Header extends React.Component {
  
  render() {
    return (
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="">Category1</NavLink>
          </li>
          <li>
            <NavLink to="">Category2</NavLink>
          </li>
          <li>
            <NavLink to="">Category3</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;