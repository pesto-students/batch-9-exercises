const validMethods = ['GET', 'POST', 'DELETE'];
const CheckValidMethods = method => validMethods.includes(method);

const checkValidURL = (uri) => {
  const uriRegex = /^([a-z]+:\/\/)?([a-z.]+[^ ]+[a-z.]+)+$/;
  return uriRegex.test(uri);
};

function requestValidator(request) {
  if (!CheckValidMethods(request.method)) {
    throw Error('Invalid request header: Invalid Method');
  }
  if (!checkValidURL(request.uri)) {
    throw Error('Invalid request header: Invalid URI');
  }

  if (request.message === undefined) {
    throw Error('Invalid request header: Invalid Message');
  }
  return request;
}

export {
  requestValidator,
};
