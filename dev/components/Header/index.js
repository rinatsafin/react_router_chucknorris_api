import React from "react";
import { NavLink, } from "react-router-dom";

import Loader from "../Loader";
import logo from "./images/logo.png";
import { API_URL_CAT, } from "../../constants";
import styles from "./header.css";

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
    fetch(API_URL_CAT)
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
      <header className={styles.header}>
        <div className={styles.wrap_logo}>
          <NavLink to="/" className={styles.logo_link} replace>
            <img className={styles.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <h1 className={styles.title}>Jokes with chucknorris.io</h1>
        <h2>Retrieve a random chuck norris joke from a given category</h2>
        <nav>
          { 
            categories.length ? (
              <ul className={styles.menu}>
                <li>
                  <NavLink className={styles.home_link} to="/" replace>Home</NavLink>
                </li>
                {
                  categories.map(cat => (<li key={cat}><NavLink to={`/category/${cat}`} replace>{cat}</NavLink></li>))
                }
              </ul>
            ) : (
              <div>
                <h1 className={styles.text_center}>Loading categories...</h1>
                <Loader />
              </div>
            )
          }
        </nav>
      </header>
    )
  }
}

export default Header;