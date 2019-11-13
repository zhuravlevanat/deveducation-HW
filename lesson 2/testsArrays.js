describe('getMinElementInArray', function() {

  it('для массива [9, -8, 0, 4, 3], return -8', function() {
    assert.equal(getMinElementInArray([9, -8, 0, 4, 3]), -8);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getMinElementInArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getMinElementInArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getMinElementInArray([]), "no data");
  });

  it('если длина массива равна 1, return этот элемент', function() {
    assert.equal(getMinElementInArray([1]), 1);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getMinElementInArray(['a', 'b']), "not valid data");
  });
});

describe('getMaxElementInArray', function() {

  it('для массива [9, -8, 0, 4, 3], return 9', function() {
    assert.equal(getMaxElementInArray([9, -8, 0, 4, 3]), 9);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getMaxElementInArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getMaxElementInArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getMaxElementInArray([]), "no data");
  });

  it('если длина массива равна 1, return этот элемент', function() {
    assert.equal(getMaxElementInArray([1]), 1);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getMaxElementInArray(['a', 'b']), "not valid data");
  });
});

describe('getMinIndexOfElementInArray', function() {

  it('для массива [9, -8, 0, 4, 3], return 1', function() {
    assert.equal(getMinIndexOfElementInArray([9, -8, 0, 4, 3]), 1);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getMinIndexOfElementInArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getMinIndexOfElementInArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getMinIndexOfElementInArray([]), "no data");
  });

  it('если длина массива равна 1, return 0', function() {
    assert.equal(getMinIndexOfElementInArray([1]), 0);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getMinIndexOfElementInArray(['a', 'b']), "not valid data");
  });
});

describe('getMaxIndexOfElementInArray', function() {

  it('для массива [9, -8, 0, 4, 3], return 0', function() {
    assert.equal(getMaxIndexOfElementInArray([9, -8, 0, 4, 3]), 0);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getMaxIndexOfElementInArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getMaxIndexOfElementInArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getMaxIndexOfElementInArray([]), "no data");
  });

  it('если длина массива равна 1, return 0', function() {
    assert.equal(getMaxIndexOfElementInArray([1]), 0);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getMaxIndexOfElementInArray(['a', 'b']), "not valid data");
  });
});

describe('getSumOfElemetsWithOddIndex', function() {

  it('для массива [9, -8, 0, 4, 3], return -4', function() {
    assert.equal(getSumOfElemetsWithOddIndex([9, -8, 0, 4, 3]), -4);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getSumOfElemetsWithOddIndex(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getSumOfElemetsWithOddIndex(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getSumOfElemetsWithOddIndex([]), "no data");
  });

  it('если длина массива равна 1, return 0', function() {
    assert.equal(getSumOfElemetsWithOddIndex([1]), 0);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getSumOfElemetsWithOddIndex(['a', 'b']), "not valid data");
  });
});

describe('getReversedArray', function() {

  it('для массива [9, -8, 0, 4, 3], return [3, 4, 0, -8, 9]', function() {
    assert.deepEqual(getReversedArray([9, -8, 0, 4, 3]), [3, 4, 0, -8, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getReversedArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getReversedArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getReversedArray([]), "no data");
  });

  it('если длина массива равна 1, return массив', function() {
    assert.deepEqual(getReversedArray([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getReversedArray(['a', 'b']), "not valid data");
  });
});

describe('getNumberOfOddElementsInArray', function() {

  it('для массива [9, -8, 0, 4, 3], return 3', function() {
    assert.deepEqual(getNumberOfOddElementsInArray([9, -8, 0, 4, 3]), 3);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(getNumberOfOddElementsInArray(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(getNumberOfOddElementsInArray(NaN), "not valid data");
  });

  it('если длина массива равна 0, return no data', function() {
    assert.equal(getNumberOfOddElementsInArray([]), "no data");
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(getNumberOfOddElementsInArray(['a', 'b']), "not valid data");
  });
});


