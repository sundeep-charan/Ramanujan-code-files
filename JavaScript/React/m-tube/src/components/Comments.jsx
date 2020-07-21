import React from "react";
import CommentListItem from "./CommentListItem";

const Comments = ({ comments }) => {
  return comments.map(comment => (
    <CommentListItem key={comment.id} comment={comment} />
  ));
};

export default Comments;
