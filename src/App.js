import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import Input from "./components/Input";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      description: "Javascript is a program language",
    },
    {
      id: 2,
      title: "Javascript 2",
      description: "Javascript is a program language",
    },
    {
      id: 3,
      title: "Javascript 3",
      description: "Javascript is a program language",
    }
  ])
  return (
    <div className="App">
      <PostList posts={posts} title={'Lists of posts'}/>

      <Counter />
      <Input />
    </div>
  );
}

export default App;
