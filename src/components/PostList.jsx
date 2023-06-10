import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <PostItem
        post={{
          id: 1,
          title: "Javascript",
          description: "Javascript is a program language",
        }}
      />

      {posts.map((post, index) => (
        <PostItem number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
