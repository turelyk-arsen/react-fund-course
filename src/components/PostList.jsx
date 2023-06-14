import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>There are NO posts</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {/* <PostItem
        post={{
          id: 1,
          title: "Javascript",
          description: "Javascript is a program language",
        }}
      /> */}
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
           
            timeout={500}
            classNames="post"
          >
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
