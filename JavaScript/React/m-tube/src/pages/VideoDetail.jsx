import React, { Component } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { connect } from "react-redux";
import {
  fetchComments,
  fetchVideo
} from "../redux/actions/currentVideoActions";
import Comments from "../components/Comments";

class VideoDetail extends Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchComments(this.props.match.params.videoId);
  }

  render() {
    return (
      <div>
        {/** Loading current video player */}
        {this.props.currentVideo ? (
          <VideoPlayer video={this.props.currentVideo.items[0]} />
        ) : (
          <h1> Loading Video ..</h1>
        )}

        {/** Loading comments related to video */}
        {this.props.comments ? (
          <Comments comments={this.props.comments.items} />
        ) : (
          <h1> Loading Comments ...</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    currentVideo: storeState.currentVideoState.video,
    comments: storeState.currentVideoState.comments
  };
};

export default connect(mapStateToProps, { fetchVideo, fetchComments })(
  VideoDetail
);
