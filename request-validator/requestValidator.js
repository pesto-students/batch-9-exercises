function hasNonSpecialCharc(string) {
  const nonSpecialRegex = /[^A-Za-z0-9]+/g;
  return nonSpecialRegex.test(string);
}
const requestSharedMethods = {
  validateMethod() {
    const validRequests = ['GET', 'POST', 'DELETE'];
    if (validRequests.indexOf(this.method) < 0) { throw new Error('Invalid request header: Invalid Method'); }
  },
  validateVersion() {
    const validVeriosn = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (validVeriosn.indexOf(this.version) < 0) {
      throw new Error('Invalid request header: Invalid Version');
    }
  },
  validateUri() {
    // eslint-disable-next-line no-useless-escape
    const uriRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    if (!uriRegex.test(this.uri)) { throw new Error('Invalid request header: Invalid URI'); }
  },
  validateMsg() {
    if (hasNonSpecialCharc(this.message) || this.message === undefined) { throw new Error('Invalid request header: Invalid Message'); }
  },
};

function requestValidator(request) {
  requestSharedMethods.validateMethod.call(request);
  requestSharedMethods.validateUri.call(request);
  requestSharedMethods.validateVersion.call(request);
  requestSharedMethods.validateMsg.call(request);
  return request;
}

export {
  requestValidator,
};
