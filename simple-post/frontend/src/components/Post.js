import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post, readCurrentPost }) => {
  return (
    <div key={post.id}>
      <h4>{post.id}</h4>
      <div>Title: {post.title}</div>
      <button type="button" onClick={() => readCurrentPost(post.id)}> Read more</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
