import { isArray } from 'util';

function truthCheck(users, checkProperty) {
  if (!isArray(users)) {
    throw Error(`Invalid Input Expected an array of users. \n Received: ${users}`);
  }
  if (!users.length) {
    return false;
  }
  return users.every(user => user[checkProperty]);
}

export {
  truthCheck,
};
