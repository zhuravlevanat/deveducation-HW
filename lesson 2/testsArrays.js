describe('getMinElementInArray', () => {

  it('for array [9, -8, 0, 4, 3], return -8', () => {
    const actual = getMinElementInArray([9, -8, 0, 4, 3]);
    const expected = -8;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getMinElementInArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getMinElementInArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getMinElementInArray([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return its element', () => {
    const actual = getMinElementInArray([1]);
    const expected = 1;
    assert.equal(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getMinElementInArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getMaxElementInArray', () => {

  it('for array [9, -8, 0, 4, 3], return 9', () => {
    const actual = getMaxElementInArray([9, -8, 0, 4, 3]);
    const expected = 9;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getMaxElementInArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getMaxElementInArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getMaxElementInArray([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return its element', () => {
    const actual = getMaxElementInArray([1]);
    const expected = 1;
    assert.equal(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getMaxElementInArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getMinIndexOfElementInArray', () => {

  it('for array [9, -8, 0, 4, 3], return 1', () => {
    const actual = getMinIndexOfElementInArray([9, -8, 0, 4, 3]);
    const expected = 1;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getMinIndexOfElementInArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getMinIndexOfElementInArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getMinIndexOfElementInArray([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return 0', () => {
    const actual = getMinIndexOfElementInArray([1]);
    const expected = 0;
    assert.equal(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getMinIndexOfElementInArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getMaxIndexOfElementInArray', () => {

  it('for array [9, -8, 0, 4, 3], return 0', () => {
    const actual = getMaxIndexOfElementInArray([9, -8, 0, 4, 3]);
    const expected = 0;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getMaxIndexOfElementInArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getMaxIndexOfElementInArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getMaxIndexOfElementInArray([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return 0', () => {
    const actual = getMaxIndexOfElementInArray([1]);
    const expected = 0;
    assert.equal(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getMaxIndexOfElementInArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getSumOfElemetsWithOddIndex', () => {

  it('for array [9, -8, 0, 4, 3], return -4', () => {
    const actual = getSumOfElemetsWithOddIndex([9, -8, 0, 4, 3]);
    const expected = -4;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getSumOfElemetsWithOddIndex(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getSumOfElemetsWithOddIndex(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getSumOfElemetsWithOddIndex([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return 0', () => {
    const actual = getSumOfElemetsWithOddIndex([1]);
    const expected = 0;
    assert.equal(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getSumOfElemetsWithOddIndex(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getReversedArray', () => {

  it('for array [9, -8, 0, 4, 3], return [3, 4, 0, -8, 9]', () => {
    const actual = getReversedArray([9, -8, 0, 4, 3]);
    const expected = [3, 4, 0, -8, 9];
    assert.deepEqual(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getReversedArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getReversedArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no-data"', () => {
    const actual = getReversedArray([]);
    const expected = 'no data';
    assert.deepEqual(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = getReversedArray([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });
  
  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getReversedArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getNumberOfOddElementsInArray', () => {

  it('for array [9, -8, 0, 4, 3], return 3', () => {
    const actual = getNumberOfOddElementsInArray([9, -8, 0, 4, 3]);
    const expected = 3;
    assert.equal(actual, expected);
  });

  it('if argument isn`t array, return "not valid data"', () => {
    const actual = getNumberOfOddElementsInArray(-576);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument is NaN, return "not valid data"', () => {
    const actual = getNumberOfOddElementsInArray(NaN);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = getNumberOfOddElementsInArray([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = getNumberOfOddElementsInArray(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

