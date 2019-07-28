
function requestValidator({
  method, uri, version, message,
}) {
  const methodOptions = ['GET', 'POST', 'DELETE'];
  const versionOptions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const specialCharacters = ['<', '>', '\\', '&', "'", '"'];

  if (method && !methodOptions.includes(method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (uri !== '*' && !uri.match(/[A-Za-z0-9.]/g).length) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!versionOptions.includes(version)) {
    throw new Error('Invalid request header: Invalid Version');
  }
  if ((!message && message !== '') || message.split('').some(char => specialCharacters.includes(char))) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return {
    method, uri, version, message,
  };
}

export {
  requestValidator,
};
