
module.exports = isNativeError;

function isNativeError(e) {
  if (!e) {
    return false;
  }

  if (e.constructor && e.constructor === Error) {
    return true;
  }

  return isNativeError(e.__proto__);
};

