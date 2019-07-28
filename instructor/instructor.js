
const oneSecond = 1000;
const defaultInstructorName = 'Ram';
const defaultSetTimeout = oneSecond;
const instructor = {
  firstName: null,
  sayHi() {
    const promise = new Promise(() => {
      setTimeout(() => {
        this.firstName = defaultInstructorName;
      }, defaultSetTimeout);
      return promise;
    });
  },
};

export {
  instructor,
};
