import React from "react";
import PropTypes from "prop-types";

class News extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  // componentWillMount() {
  // 	newsId ? (
  // 		this.getNews()
  // 	) : (
  // 		this.getAllNews()
  // 	)
  // }
  
  render() {
    console.log("ololo");
    const { match, } = this.props;
    return (
      match.params.newsId ? (
        "one news"
      ) : (
        "list news"
      )
    );
  }
}

export default News;