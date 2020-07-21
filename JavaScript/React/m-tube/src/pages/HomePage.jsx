import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTrendingVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrendingVideos();
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return this.props.videos ? (
      <Videos videos={this.props.videos.items} />
    ) : (
      <h1>Loading</h1>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user,
    videos: storeState.videoState.videos
  };
};

export default connect(mapStateToProps, { fetchTrendingVideos })(HomePage);
