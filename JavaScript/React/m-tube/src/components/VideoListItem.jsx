import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";

const limitDescriptionContent = (description, letterCount) => {
  return description.length <= letterCount
    ? description
    : `${description.slice(0, letterCount)}...`;
};

const VideoListItem = ({ video: { snippet, ...restProps }, mode }) => {
  return (
    <Card style={{ flexBasis: "250px", marginBottom: "10px" }}>
      <Link
        to={`/videos/${
          mode === "search" ? restProps.id.videoId : restProps.id
        }`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <CardImg
          top
          width="100%"
          src={snippet.thumbnails.high.url}
          alt="Video thumbnail"
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <span style={{ fontWeight: "bold" }}>Title:</span> {snippet.title}
          </CardTitle>
          <CardSubtitle>
            <span style={{ fontWeight: "bold" }}>Channel:</span>{" "}
            {snippet.channelTitle}
          </CardSubtitle>
          <CardText>
            <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
            {limitDescriptionContent(snippet.description, 100)}
          </CardText>
        </CardBody>
      </Link>
    </Card>
  );
};

export default VideoListItem;
