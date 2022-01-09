import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from '../hooks/useFetching';
import MyLoader from '../components/UI/loader/MyLoader';
import Comment from '../components/Comment';

const PostInfo = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPost(params.id);
    setPost(response.data);
  });
  const [fetchPostComments, isLoadingComments, errorComments] = useFetching(async () => {
    const response = await PostService.getPostComments(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchPostComments(params.id);
  }, [])

  return (
    <div>
      <h1>Post #{params.id} info</h1>
      {
        isLoading ?
          <MyLoader />
          : <div>{params.id}. {post.title}</div>
      }
      <h1>
        comments
      </h1>
      {
        isLoadingComments ?
          <MyLoader />
          : <div>
            {comments.map(x => (
              <Comment
                key={x.id}
                email={x.email}
                body={x.body}
              />
            ))}
          </div>
      }
    </div>
  )
}

export default PostInfo;