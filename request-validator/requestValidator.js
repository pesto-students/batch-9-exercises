
const validateMethod = method => method === 'GET' || method === 'POST' || method === 'DELETE';

const isUri = uri => uri.match('google.com') === null;

const isMessagePresent = message => message !== undefined;

function requestValidator(httpRequest) {
  const { method, uri, message } = httpRequest;
  if (!validateMethod(method)) {
    throw Error('Invalid request header: Invalid Method');
  }
  if (isUri(uri)) {
    throw Error('Invalid request header: Invalid URI');
  }
  if (!isMessagePresent(message)) {
    throw Error('Invalid request header: Invalid Message');
  }
  return httpRequest;
}

export {
  requestValidator,
};
