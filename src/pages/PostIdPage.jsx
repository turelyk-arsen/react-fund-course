import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  // const [fetchPostById, isLoading] = useFetching(async () => {
  //   const response = await PostService.getById(params.id);
  //   setPost(response.data);
  // });

  // const [fetchComments, isComLoading] = useFetching(async () => {
  //   const response = await PostService.getCommentsById(params.id);
  //   setComments(response.data);
  // });

  // useEffect(() => {
  //   fetchPostById(params.id);
  //   fetchComments(params.id)
  // }, []);
  const fetchPostById = useCallback(async (id) => {
    try {
      const response = await PostService.getById(id);
      setPost(response.data);
    } catch (e) {
      console.error("Failed to fetch post", e);
    }
  }, []);

  const fetchComments = useCallback(async (id) => {
    try {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    } catch (e) {
      console.error("Failed to fetch comments", e);
    }
  }, []);

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [fetchPostById, fetchComments, params.id]);

  return (
    // <div>
    //   <h1> You open page with ID = {params.id}</h1>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <div>
    //       {post.id}. {post.title}
    //     </div>
    //   )}
    //   <h1>Comments</h1>
    //   {isComLoading
    //   ? <Loader/>
    //   : <div>
    //     {comments.map(comm => 
    //         <div key={comm.id} style={{marginTop: 15}}>
    //             <h5>{comm.email}</h5>
    //             <div>{comm.body}</div>
    //         </div>
    //         )}
    //     </div>}
    // </div>
    <div>
    <h1> You open page with ID = {params.id}</h1>
    {!post ? (
      <Loader />
    ) : (
      <div>
        {post.id}. {post.title}
      </div>
    )}
    <h1>Comments</h1>
    {!comments ? (
      <Loader />
    ) : (
      <div>
        {comments.map((comm) => (
          <div key={comm.id} style={{ marginTop: 15 }}>
            <h5>{comm.email}</h5>
            <div>{comm.body}</div>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default PostIdPage;
