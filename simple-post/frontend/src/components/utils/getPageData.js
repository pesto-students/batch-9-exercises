
const BASE_URL = 'http://localhost:3001';
const commonHeaders = {
  'pesto-password': 'darth vader',
};
const fetchPagePosts = (pageNumber) => {
  const fetchedPostsPromise = fetch(`${BASE_URL}/posts/${pageNumber}`, {
    credentials: 'same-origin',
    headers: {
      ...commonHeaders,
    },
  }).then(response => response.json());

  return fetchedPostsPromise;
};

const fetchSelectedPost = (postId) => {
  const fetchedPostPromise = fetch(`${BASE_URL}/post/${postId}`, {
    credentials: 'same-origin',
    headers: {
      ...commonHeaders,
    },
  }).then(response => response.json());

  return fetchedPostPromise;
};

export { fetchPagePosts, fetchSelectedPost };
