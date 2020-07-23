import React from "react";
import { Jumbotron } from "reactstrap";

const VideoPlayer = ({
  video: { id, snippet, contentDetails, statistics }
}) => {
  const { viewCount, likeCount, dislikeCount } = statistics;
  console.log(statistics, contentDetails);
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Video"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <Jumbotron>
        <h1 className="display-6" style={{ fontSize: "20px" }}>
          {snippet.title}
        </h1>
        <p className="lead">{snippet.channelTitle}</p>
        <hr className="my-4" />
        <p>{snippet.description}</p>
        <p className="lead">Views: {viewCount}</p>
        <p className="lead">Likes: {likeCount}</p>
        <p className="lead">Dislikes: {dislikeCount}</p>
      </Jumbotron>
    </>
  );
};

export default VideoPlayer;
