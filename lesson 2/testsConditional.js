describe('getSumOrMult', function() {

  it('first argument is even number, return mult', function() {
    assert.equal(getSumOrMult(2, 3), 6);
  });

  it('first argument is odd number, return sum', function() {
    assert.equal(getSumOrMult(3, 2), 5);
  });

  it('if first agrument is null return 0', function() {
    assert.deepEqual(getSumOrMult(null, 2), 0);
  });

  it('if one or both arguments is undefined return NaN', function() {
    assert.deepEqual(getSumOrMult(undefined, 2), NaN);
  });

  it('one or both arguments is NaN, return NaN', function() {
    assert.deepEqual(getSumOrMult('a', 2), NaN);
  }); 

});

describe('getQuater', function() {

  it('first argument is positive, second is positive, return "First quater"', function() {
    assert.equal(getQuater(5, 7), 'First quater');
  });

  it('first argument is negative, second is positive, return "Second quater"', function() {
    assert.equal(getQuater(-5, 7), 'Second quater');
  });

  it('first argument is negative, second is negative, return "Third quater"', function() {
    assert.equal(getQuater(-5, -7), 'Third quater');
  });

  it('first argument is positive, second is negative, return "Fourth quater"', function() {
    assert.equal(getQuater(5, -7), 'Fourth quater');
  });

  it('first argument is 0, second is 0, return "It`s the origin"', function() {
    assert.equal(getQuater(0, 0), 'It`s the origin');
  });

  it('first argument is 0, second isn`t equal 0, return "It`s axis Y"', function() {
    assert.equal(getQuater(0, 2), 'It`s axis Y');
  });

  it('second argument is 0, first isn`t equal 0 return "It`s axis X"', function() {
    assert.equal(getQuater(2, 0), 'It`s axis X');
  });

  it('one of arguments is NaN, return NaN', function() {
    assert.deepEqual(getQuater('a', 2), NaN);
  });

  it('if one or both arguments is undefined return NaN', function() {
    assert.deepEqual(getQuater(undefined, 2), NaN);
  });
});

describe('getSumOfPositiveNumbers', function() {

  it('if 1st argument > 0, others are negative return first argument', function() {
    assert.equal(getSumOfPositiveNumbers(2, -3, -4), 2);
  });

  it('if 1st and 2nd argument > 0, 3rd is negative return sum of 1st and 2nd argument', function() {
    assert.equal(getSumOfPositiveNumbers(2, 3, -4), 5);
  });

  it('if 1st, 2nd, 3rd argument > 0, return sum of all three arguments', function() {
    assert.equal(getSumOfPositiveNumbers(2, 3, 4), 9);
  });

  it('if one or more arguments is NaN return NaN', function() {
    assert.deepEqual(getSumOfPositiveNumbers('a', 3, 4), NaN);
  });

  it('one or more arguments is undefined, return NaN', function() {
    assert.deepEqual(getSumOfPositiveNumbers(undefined, 3, 4), NaN);
  }); 

});



