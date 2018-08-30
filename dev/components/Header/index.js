import React from "react";
import { NavLink, } from "react-router-dom";

import Loader from "../Loader";
import logo from "./images/logo.png";
import styles from "./header.css";

//const API_URL_RANDOM_JOKE = "https://api.chucknorris.io/jokes/random";
const API_GET_CATEGORIES_URL = "https://api.chucknorris.io/jokes/categories";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    }
  }

  componentWillMount() {
    this.getCategory();
  }

  getCategory() {
    fetch(API_GET_CATEGORIES_URL)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          categories: response,
        });
      })
      .catch(e => {
        this.setState({
          categories: [],
        });
      });
  }

  render() {
    const { categories, } = this.state;
    return (
      <header>
        <img className={styles.logo} src={logo} alt="Chuck norris logo" />
        <h1>Get Jokes with chucknorris.io</h1>
        <nav>
          <ul className="menu">
            { categories.length ? (
              categories.map(cat => (<li key={Date.now()}><NavLink to={`/${cat}`} activeClassName="active">{cat}</NavLink></li>))
            ) : (
              <li>
                <NavLink to="/news" activeClassName="active">news</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;