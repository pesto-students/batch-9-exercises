
function localStorage() {
  const isLoggedIn = localStorage.getItem('is-logged');
  return isLoggedIn;
}

export {
  localStorage,
};
