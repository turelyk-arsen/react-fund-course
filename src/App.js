import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
    // {
    //   id: 1,
    //   title: "Javascript",
    //   description: "Avascript is a program language",
    // },
    // {
    //   id: 2,
    //   title: "Avascript 2",
    //   description: "Javascript is a program language",
    // },
    // {
    //   id: 3,
    //   title: "Script 3",
    //   description: "Qavascript is a program language",
    // },
  

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // const sortedPosts = useMemo(() => {
  //   if (selectedSort) {
  //     return [...posts].sort((a, b) =>
  //       a[selectedSort].localeCompare(b[selectedSort])
  //     );
  //   }
  //   return posts;
  // }, [selectedSort, posts]);

  // const sortedPosts = useMemo(() => {
  //   if (filter.sort) {
  //     return [...posts].sort((a, b) =>
  //       a[filter.sort].localeCompare(b[filter.sort])
  //     );
  //   }
  //   return posts;
  // }, [filter.sort, posts]);

  // const sortedAndSearchedPosts = useMemo(() => {
  //   return sortedPosts.filter((post) =>
  //     post.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [searchQuery, sortedPosts]);
  // const sortedAndSearchedPosts = useMemo(() => {
  //   return sortedPosts.filter((post) =>
  //     post.title.toLowerCase().includes(filter.query.toLowerCase())
  //   );
  // }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  // };

  return (
    <div className="App">
      <button onClick={fetchPosts}>Get POSTS</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create POST
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Lists of posts"}
      />

      <Counter />
      <Input />
    </div>
  );
}

export default App;
