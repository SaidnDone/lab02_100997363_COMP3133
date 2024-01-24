const assert = require('chai').assert;
const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Tests', function () {
  it('add(5, 2) expected result 7 PASS', function () {
    const result = add(5, 2);
    assert.equal(result, 7, `add(5, 2) expected result 7 PASS, but got ${result}`);
  });

  it('add(5, 2) expected result 8 FAIL', function () {
    const result = add(5, 2);
    assert.equal(result, 8, `add(5, 2) expected result 8 FAIL, but got ${result}`);
  });

  it('sub(5, 2) expected result 3 PASS', function () {
    const result = sub(5, 2);
    assert.equal(result, 3, `sub(5, 2) expected result 3 PASS, but got ${result}`);
  });

  it('sub(5, 2) expected result 5 FAIL', function () {
    const result = sub(5, 2);
    assert.equal(result, 5, `sub(5, 2) expected result 5 FAIL, but got ${result}`);
  });

  it('mul(5, 2) expected result 10 PASS', function () {
    const result = mul(5, 2);
    assert.equal(result, 10, `mul(5, 2) expected result 10 PASS, but got ${result}`);
  });

  it('mul(5, 2) expected result 12 FAIL', function () {
    const result = mul(5, 2);
    assert.equal(result, 12, `mul(5, 2) expected result 12 FAIL, but got ${result}`);
  });

  it('div(10, 2) expected result 5 PASS', function () {
    const result = div(10, 2);
    assert.equal(result, 5, `div(10, 2) expected result 5 PASS, but got ${result}`);
  });

  it('div(10, 2) expected result 2 FAIL', function () {
    const result = div(10, 2);
    assert.equal(result, 2, `div(10, 2) expected result 2 FAIL, but got ${result}`);
  });
});
