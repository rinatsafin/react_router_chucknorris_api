import React from "react";
import PropTypes from "prop-types";

import Loader from "../../components/Loader";
import styles from "./home.css";
import { API_URL_RAND, } from "../../constants";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: {
        id: null,
        icon_url: null,
        value: null,
        url: null,
      },
    };
  }

  componentWillMount() {
    this.getRandomeJoke();
  }
  
  componentDidUpdate(prevProps) {
    const { location, } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
    if (prevProps && prevProps.history.action == "REPLACE") {
      prevProps.history.action = "POP";
      this.getRandomeJoke();
    }
  }

  getRandomeJoke() {
    fetch(API_URL_RAND)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          joke: response,
        });
      })
      .catch(e => {
        this.setState({
          joke: {
            id: null,
            icon_url: null,
            value: null,
            url: null,
          },
        });
      });
  }

  render() {
    const { joke, } = this.state;
    const { history, } = this.props;
    return (
      <div className={styles.text_center}>
        {
          joke.value && history.action && history.action !== "REPLACE" ? (
            <div className={styles.joke_wrap}>
              <img className={styles.img} src={joke.icon_url} alt="random joke" />
              <div className={styles.text}>
                {joke.value}
                <a className={styles.link} href={joke.url} target="_blank" rel='noopener noreferrer'>Link</a>
              </div>
            </div>
          ) : (
            <div>
              <h1 className={styles.text_center}>Loading randome joke...</h1>
              <Loader />
            </div>
          )
        }
      </div>
    )
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Home;