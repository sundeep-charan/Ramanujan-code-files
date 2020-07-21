import React from "react";

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.map(reply => (
        <li key={reply.id}>{reply.snippet.textOriginal}</li>
      ))}
    </div>
  );
};

export default Replies;
