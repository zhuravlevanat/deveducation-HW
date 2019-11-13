describe('isPrimeNumber', () => {

  it('if number is prime, return true', () => {
    const actual = isPrimeNumber(7);
    const expected = true;
    assert.equal(actual, expected);
  });

  it('if number is compose, return false', () => {
    const actual = isPrimeNumber(6);
    const expected = false;
    assert.equal(actual, expected);
  });

  it('if number < 0, return false', () => {
    const actual = isPrimeNumber(-6);
    const expected = false;
    assert.equal(actual, expected);
  });

  it('if number is 0, return false', () => {
    const actual = isPrimeNumber(0);
    const expected = false;
    assert.equal(actual, expected);
  });

  it('if number is NaN or undefined, return false', () => {
    const actual = isPrimeNumber('a');
    const expected = false;
    assert.deepEqual(actual, expected);
  });

  it('if number is 1, return false', () => {
    const actual = isPrimeNumber(1);
    const expected = false;
    assert.equal(actual, expected);
  });
});

 describe('sqrt', function() {

  it('sqrt from positive number 25, return 5', () => {
    const actual = sqrt(25);
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('sqrt from negative number -25, return "not valid data"', () => {
    const actual = sqrt(-25);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('sqrt from 0, return 0', () => {
    const actual = sqrt(0);
    const expected = 0;
    assert.equal(actual, expected);
  });

  it('sqrt from Infinity, return "not valid data"', () => {
    const actual = sqrt(Infinity);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('sqrt from NaN or undefined, return "not valid data"', () => {
    const actual = sqrt('a');
    const expected = 'not valid data';
    assert.deepEqual(actual, expected);
  });  
});

 describe('getFactorial', () => {

  it('factorial for 5, return 120', () => {
    const actual = getFactorial(5);
    const expected = 120;
    assert.equal(actual, expected);
  });

  it('factorial for 0, return 1', () => {
    const actual = getFactorial(0);
    const expected = 1;
    assert.equal(actual, expected);
  });

  it('factorial for 1, return 1', () => {
    const actual = getFactorial(1);
    const expected = 1;
    assert.equal(actual, expected);
  });
  
  it('factorial for negative numbers, return "not valid data"', () => {
    const actual = getFactorial(-5);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('factorial for NaN and undefined, return "not valid data"', () => {
    const actual = getFactorial('a');
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
 });

 describe('getSumOfNumbers', () => {

  it('sum of numbers for positive 578, return 20', () => {
    const actual = getSumOfNumbers(578);
    const expected = 20;
    assert.equal(actual, expected);
  });

  it('sum of numbers for negative -578, return 20', () => {
    const actual = getSumOfNumbers(-578);
    const expected = 20;
    assert.equal(actual, expected);
  });

  it('sum of numbers for 0, return 0', () => {
    const actual = getSumOfNumbers(0);
    const expected = 0;
    assert.equal(actual, expected);
  });

  it('sum of numbers for NaN, undefined, return "not valid data"', () => {
    const actual = getSumOfNumbers('a');
    const expected = 'not valid data';
    assert.deepEqual(actual, expected);
  });
});

