import React from "react";
import VideoListItem from "../components/VideoListItem";
import { CardDeck } from "reactstrap";

const Videos = ({ videos, mode = "trending" }) => {
  console.log(mode);
  return (
    <CardDeck style={{ padding: "10px" }}>
      {videos.map(video => (
        <VideoListItem
          key={mode === "search" ? video.id.videoId : video.id}
          video={video}
          mode={mode}
        />
      ))}
    </CardDeck>
  );
};

export default Videos;
