import React, { Component } from "react";
import styles from "./Newsfeed.module.css";
import News from "./News";
class Newsfeed extends Component {
  state = {
    todos: [],
    error: false
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-05&sortBy=publishedAt&apiKey=1f02327de8724a96aabfe0202a93a7c1"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: data.articles });
      })
      .catch(this.setState({ error: true }));
  }
  render() {
    return (
      <div className={styles.base}>
        {this.state.todos &&
          this.state.todos.map(todo => (
            <News
              image={todo.urlToImage}
              title={todo.title}
              content={todo.content}
            />
          ))}
        {this.state.error === false && <h1>no data found</h1>}
      </div>
    );
  }
}
export default Newsfeed;
