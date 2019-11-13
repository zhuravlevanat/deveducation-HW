describe('bubbleSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = bubbleSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = bubbleSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = bubbleSort([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = bubbleSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = bubbleSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});

describe('selectionSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = selectionSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = selectionSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = selectionSort([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = selectionSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = selectionSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});

describe('insertionSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = insertionSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = insertionSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = insertionSort([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = insertionSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = insertionSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});


describe('bubbleSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = bubbleSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = bubbleSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return "no data"', () => {
    const actual = bubbleSort([]);
    const expected = 'no data';
    assert.equal(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = bubbleSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = bubbleSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});


describe('quickSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = quickSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = quickSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return []', () => {
    const actual = quickSort([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = quickSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = quickSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});


describe('mergeSort', () => {

  it('for array [9, -8, 0, 4, 3], return [-8, 0, 3, 4, 9]', () => {
    const actual = mergeSort([9, -8, 0, 4, 3]);
    const expected = [-8, 0, 3, 4, 9];
    assert.deepEqual(actual, expected);
  });

  it('for argument isn`t array, return "not valid data"', () => {
    const actual = mergeSort(573);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if array length equal 0, return []', () => {
    const actual = mergeSort([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('if array length equal 1, return array', () => {
    const actual = mergeSort([1]);
    const expected = [1];
    assert.deepEqual(actual, expected);
  });  

  it('if array contains not numeric values, return "not valid data"', () => {
    const actual = mergeSort(['a', 'b']);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  }); 
});






