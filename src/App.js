import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";

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

  // async function fetchPosts() {
  //   setIsPostsLoading(true);
  //   setTimeout(async () => {
  //     const posts = await PostService.getAll();
  //     setPosts(posts);
  //     setIsPostsLoading(false);
  //   }, 1000);
  // }

  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    // setPosts(posts);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page)
    fetchPosts()
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // const [isPostsLoading, setIsPostsLoading] = useState(false);
  // useEffect(()=>{console.log('hello');}, [filter])

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
      {/* <button onClick={fetchPosts}>Get POSTS</button> */}
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create POST
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>Error ${postError}</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Lists of posts"}
        />
      )}

      <Counter />
      <Input />
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
