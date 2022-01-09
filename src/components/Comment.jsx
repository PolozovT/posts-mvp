import React from 'react';

const Comment = ({ email, body }) => {

  return (
    <div style={{ marginTop: 15 }}>
      <h5>{email}</h5>
      <span>{body}</span>
    </div>
  )
}

export default Comment;