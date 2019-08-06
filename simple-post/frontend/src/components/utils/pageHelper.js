
const pageNumberKey = 'pageNumber';

const setCurrentPage = (page) => {
  try {
    const pageNumber = JSON.stringify(page);
    localStorage.setItem([pageNumberKey], pageNumber);
    return true;
  } catch (e) {
    return false;
  }
};

const getCurrentPage = () => {
  const currentPage = parseInt(localStorage.getItem(pageNumberKey), 10);
  return (currentPage);
};

export {
  setCurrentPage,
  getCurrentPage,

};
