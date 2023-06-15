import React from "react";
import MyButton from "./UI/Button/MyButton"

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        {/* <strong>{props.number}. {props.post.title} (ID post is {props.post.id})</strong> */}
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Open</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
