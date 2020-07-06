import React, { Component } from "react";

class PostDetail extends Component {
  state = {
    post: null
  };

  async componentDidMount() {
    const postId = this.props.match.params.postId;
    const response = await fetch(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await response.json();
    this.setState({ post });
  }

  render() {
    return this.state.post === null ? (
      <h1>Loading ...</h1>
    ) : (
      <div>
        <h2>Title: {this.state.post.title}</h2>
        <h2>Body: {this.state.post.body}</h2>
      </div>
    );
  }
}

export default PostDetail;
