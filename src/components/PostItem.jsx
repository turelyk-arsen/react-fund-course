import React from "react";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        {/* <strong>{props.number}. {props.post.title} (ID post is {props.post.id})</strong> */}
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => props.remove(props.post)}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
