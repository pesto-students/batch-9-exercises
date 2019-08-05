import React from 'react';

const PostPage = (props) => {
  const data = JSON.stringify(props);
  return (
      <div>
          <p>{data}</p>
        </div>
  );
};

export default PostPage;
