class CustomParseJsonError extends Error {
  constructor(message, fileName) {
    super(message);
    this.name = this.constructor.name;
    this.fileName = fileName;
  }
}
function parseJson(jsonString, fileName = '') {
  try {
    const requiredJsonObj = JSON.parse(jsonString);
    return requiredJsonObj;
  } catch (error) {
    throw new CustomParseJsonError(error, fileName);
  }
}

export {
  parseJson,
};
