import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({ create }) => {
  // 1 we select EACH input
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const addNewPost = (e) => {
  //   e.preventDefault();

  //   const newPost = {
  //     id: Date.now(),
  //     title,
  //     body,
  //   };

  //   setPosts([...posts, newPost]);
  //   setTitle('')
  //   setBody('')
  // };

  // 2 variant with object
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    // setPosts([...posts, {...post, id: Date.now(), }])
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      {/* 1111111111111111111111111111111111111111111111111111 */}
      {/* <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Description"
        /> */}

      {/* 2222222222222222222222222222222222222222222222222222222 */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description"
      />

      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
