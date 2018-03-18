const propWithPath = require('../src/index');

const info = {
  user: {
    id: 'abc',
    name: 'grant',
    age: 10,
    websites: {
      github: 'https://github.com/guangtuan'
    }
  },
  arrayArray: [
    [
      {
        id: '123'
      }
    ]
  ]
};

info.numberArray = Array(20).fill(null).map((_, index) => index);

const assert = require('assert');
describe('pathWithProp', () => {
  const testCases = [{
    path: 'user',
    value: info.user
  }, {
    path: 'user.websites.github',
    value: info.user.websites.github
  }, {
    path: 'numberArray[3]',
    value: info.numberArray[3]
  }, {
    path: 'numberArray[15]',
    value: info.numberArray[15]
  }, {
    path: 'arrayArray[0]',
    value: info.arrayArray[0]
  }, {
    path: 'arrayArray[0][0]',
    value: info.arrayArray[0][0]
  }];
  const run = testCase => {
    it(`value with path: ${testCase.path} should be ${JSON.stringify(testCase.value)}`, () => {
      assert.equal(propWithPath(info, testCase.path), testCase.value);
    });
  }
  testCases.forEach(run);
});