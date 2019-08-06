import React from 'react';
import PropTypes from 'prop-types';

const PostPage = ({
  post, show, handleClose, loading,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className="modal-main" >
        {loading  || !post? (<h4> Loading... </h4>) :
        (<div>
          <h4>{post.id}</h4>
          <div>Title: {post.title}</div>
          <div>Body: {post.body} </div>
         </div>
        )}
        <button onClick={handleClose}>close</button>
      </div>

    </div>
  );
};

PostPage.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

export default PostPage;

