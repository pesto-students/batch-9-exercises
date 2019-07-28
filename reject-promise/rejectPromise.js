
function rejectPromise() {
  return Promise.reject().catch(() => 'REJECTED!');
}

export {
  rejectPromise,
};
