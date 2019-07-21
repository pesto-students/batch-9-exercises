const validMethods = ['GET', 'POST', 'DELETE'];
const isValidURI = (uri) => {
  const uriRegex = /^([a-z]+:\/\/)?([a-z.]+[^ ]+[a-z.]+)+$/;
  return uriRegex.test(uri);
};

const isMethodValid = method => validMethods.includes(method);
function requestValidator(request) {
  if (!isMethodValid(request.method)) {
    throw Error('Invalid request header: Invalid Method');
  }

  if (!isValidURI(request.uri)) {
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
