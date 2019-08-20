
const isNativeError = require('./index.js');

describe('isNativeError', () => {
  it('identifies `new Error()` as a native error', () => {
    expect(isNativeError(new Error())).toEqual(true);
  });

  it('identifies `new TypeError()` as a native error', () => {
    expect(isNativeError(new TypeError())).toEqual(true);
  });

  it('identifies `{}` as a non-native error', () => {
    expect(isNativeError({})).toEqual(false);
  });
});

