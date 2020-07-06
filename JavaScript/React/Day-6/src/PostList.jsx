import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostList extends Component {
  state = {
    posts: null
  };

  async componentDidMount() {
    const response = await fetch(
      "https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await response.json();
    this.setState({ posts });
  }

  render() {
    return this.state.posts === null ? (
      <h1>Loading</h1>
    ) : (
      this.state.posts.map(p => (
        <Link style={{ display: "block" }} to={`/posts/${p.id}`} key={p.id}>
          {p.title}
        </Link>
      ))
    );
  }
}

export default PostList;
