import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    return (
        <div>
            <h4>Post Id: {post.id}</h4>
            <div>User Id: {post.userId}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
};

export default Post;