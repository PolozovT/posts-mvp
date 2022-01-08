import React from "react";
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1
        style={{ textAlign: 'center' }}
      >
        there is no posts
      </h1>
    )
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {
        posts.map((x, index) => (
          <PostItem
            remove={remove}
            number={index + 1}
            key={x.id}
            post={{ id: x.id, title: x.title, body: x.body }}
          />
        ))
      }
    </>
  )
}

export default PostList;