import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      description: "Avascript is a program language",
    },
    {
      id: 2,
      title: "Avascript 2",
      description: "Javascript is a program language",
    },
    {
      id: 3,
      title: "Script 3",
      description: "Qavascript is a program language",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: "title", name: "Name" },
            { value: "description", name: "Description" },
          ]}
        />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"Lists of posts"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>There are NO posts</h1>
      )}

      <Counter />
      <Input />
    </div>
  );
}

export default App;
