import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => {
  return (
    <div key={post.id}>
      <h4>{post.id}</h4>
      <div>Title: {post.title}</div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
