
function parseJson(jsonString, fileName = '') {
  try {
    const requiredJsonObj = JSON.parse(jsonString);
    return requiredJsonObj;
  } catch (error) {
    throw new Error(error, fileName);
  }
}

export {
  parseJson,
};
