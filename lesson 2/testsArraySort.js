describe('bubbleSort', function() {

  it('для массива [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', function() {
    assert.deepEqual(bubbleSort([9, -8, 0, 4, 3]), [-8, 0, 3, 4, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(bubbleSort(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(bubbleSort(NaN), "not valid data");
  });

  it('если длина массива равна 0, "no data"', function() {
    assert.equal(bubbleSort([]), "no data");
  });

  it('если длина массива равна 1, return этот массив', function() {
    assert.deepEqual(bubbleSort([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(bubbleSort(['a', 'b']), "not valid data");
  });
});

describe('selectionSort', function() {

  it('для массива [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', function() {
    assert.deepEqual(selectionSort([9, -8, 0, 4, 3]), [-8, 0, 3, 4, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(selectionSort(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(selectionSort(NaN), "not valid data");
  });

  it('если длина массива равна 0, return "no data"', function() {
    assert.equal(selectionSort([]), "no data");
  });

  it('если длина массива равна 1, return этот массив', function() {
    assert.deepEqual(selectionSort([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(selectionSort(['a', 'b']), "not valid data");
  });
});

describe('insertionSort', function() {

  it('для массива [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', function() {
    assert.deepEqual(insertionSort([9, -8, 0, 4, 3]), [-8, 0, 3, 4, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(insertionSort(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(insertionSort(NaN), "not valid data");
  });

  it('если длина массива равна 0, return "no data"', function() {
    assert.equal(insertionSort([]), "no data");
  });

  it('если длина массива равна 1, return этот массив', function() {
    assert.deepEqual(insertionSort([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(insertionSort(['a', 'b']), "not valid data");
  });
});

describe('quickSort', function() {

  it('для массива [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', function() {
    assert.deepEqual(quickSort([9, -8, 0, 4, 3]), [-8, 0, 3, 4, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(quickSort(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(quickSort(NaN), "not valid data");
  });

  it('если длина массива равна 0, return []', function() {
    assert.deepEqual(quickSort([]), []);
  });

  it('если длина массива равна 1, return этот массив', function() {
    assert.deepEqual(quickSort([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(quickSort(['a', 'b']), "not valid data");
  });
});

describe('mergeSort', function() {

  it('для массива [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', function() {
    assert.deepEqual(mergeSort([9, -8, 0, 4, 3]), [-8, 0, 3, 4, 9]);
  });

  it('если аргумент не массив, return "not valid data"', function() {
    assert.equal(mergeSort(-578), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.equal(mergeSort(NaN), "not valid data");
  });

  it('если длина массива равна 0, return []', function() {
    assert.deepEqual(mergeSort([]), []);
  });

  it('если длина массива равна 1, return этот массив', function() {
    assert.deepEqual(mergeSort([1]), [1]);
  });

  it('если массив содержит нечисловые значения, return "not valid data"', function() {
    assert.equal(mergeSort(['a', 'b']), "not valid data");
  });
});
