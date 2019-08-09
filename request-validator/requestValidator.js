const isValidMethodName = (methodName) => {
  const validMethodNames = [
    'GET',
    'POST',
    'DELETE',
  ];
  if (!validMethodNames.includes(methodName)) {
    return false;
  }
  return true;
};

const isValidUri = (uri) => {
  const regex = /(\w+\.\w+\.*\w*)+/g;
  return regex.test(uri);
};

const isValidVersion = (versionString) => {
  const validVersionStrings = [
    'HTTP/0.9',
    'HTTP/1.0',
    'HTTP/1.1',
    'HTTP/2.0',
  ];
  if (!validVersionStrings.includes(versionString)) {
    return false;
  }
  return true;
};

const isValidMessage = (message) => {
  if (message === undefined) {
    return false;
  }
  const messageArray = message.split('');
  const invalidCharacters = [
    '<',
    '>',
    '\\',
    '&',
    '\'',
    '"',
  ];
  for (const character of invalidCharacters) {
    if (messageArray.includes(character)) {
      return false;
    }
  }
  return true;
};

function requestValidator(requestObject) {
  let errorType;
  if (isValidMethodName(requestObject.method)) {
    if (isValidUri(requestObject.uri)) {
      if (isValidVersion(requestObject.version)) {
        if (isValidMessage(requestObject.message)) {
          return requestObject;
        }
        errorType = 'Message';
      } else {
        errorType = 'Version';
      }
    } else {
      errorType = 'URI';
    }
  } else {
    errorType = 'Method';
  }
  throw new Error(`Invalid request header: Invalid ${errorType}`);
}

export {
  requestValidator,
};
