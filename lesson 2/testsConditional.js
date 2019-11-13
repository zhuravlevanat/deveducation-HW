describe('getSumOrMult', () => {

  it('first argument is even 2, return mult of args 6', () => {
    const actual = getSumOrMult(2, 3);
    const expected = 6;
    assert.equal(actual, expected);
  });

  it('first argument 3, return sum of args 5', () => {
    const actual = getSumOrMult(3, 2);
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('first argument 0 return 0', () => {
    const actual = getSumOrMult(0, 2);
    const expected = 0;
    assert.equal(actual, expected);
  });

  it('if one or both args undefined or NaN return "non valid data"', () => {
    const actual = getSumOrMult(undefined, 'a');
    const expected = 'non valid data';
    assert.equal(actual, expected);
  });
});

describe('getQuater', () => {

  it('first arg > 0, second arg > 0, return "First quater"', () => {
    const actual = getQuater(5, 7);
    const expected = 'First quater';
    assert.equal(actual, expected);
    
  });

  it('first arg < 0, second arg > 0, return "Second quater"', () => {
    const actual = getQuater(-5, 7);
    const expected = 'Second quater';
    assert.equal(actual, expected);
  });

  it('first arg < 0, second arg < 0, return "Third quater"', () => {
    const actual = getQuater(-5, -7);
    const expected = 'Third quater';
    assert.equal(actual, expected);
  });

  it('first arg > 0, second arg < 0, return "Fourth quater"', () => {
    const actual = getQuater(5, -7);
    const expected = 'Fourth quater';
    assert.equal(actual, expected);
  });

  it('first arg 0, second arg 0, return "It`s the origin"', () => {
    const actual = getQuater(0, 0);
    const expected = 'It`s the origin';
    assert.equal(actual, expected);
  });

  it('first arg > 0, second arg isn`t equal 0, return "It`s axis Y"', () => {
    const actual = getQuater(0, 2);
    const expected = 'It`s axis Y';
    assert.equal(actual, expected);
  });

  it('first arg isn`t equal 0, second arg 0 return "It`s axis X"', () => {
    const actual = getQuater(2, 0);
    const expected = 'It`s axis X';
    assert.equal(actual, expected);
  });

  it('one or both args NaN or undefined, return NaN', () => {
    const actual = getQuater(undefined, 'a');
    const expected = 'non valid data';
    assert.deepEqual(actual, expected);    
  });
});

describe('getSumOfPositiveNumbers', () => {
  
  it('first arg > 0, others < 0 return first arg', () => {
    const actual = getSumOfPositiveNumbers(2, -3, -4);
    const expected = 2;
    assert.deepEqual(actual, expected); 
  });

  it('all three args > 0, return 9', () => {
    const actual = getSumOfPositiveNumbers(2, 3, 4);
    const expected = 9;
    assert.deepEqual(actual, expected); 
  });

  it('one or both args NaN or undefined', () => {
    const actual = getSumOfPositiveNumbers('a', 3, undefined);
    const expected = 'non valid data';
    assert.deepEqual(actual, expected); 
  });
 });

describe('getMaxValue', () => {

  it('all args > 0 , return mult of args + 3', () => {
    const actual = getMaxValue(2, 3, 4);
    const expected = 27;
    assert.deepEqual(actual, expected); 
  });

  it('all args < 0, return sum of args + 3', () => {
    const actual = getMaxValue(-2, -3, -4);
    const expected = -6;
    assert.deepEqual(actual, expected); 
  });

  it('one or more args equal 0, return sum of arg + 3', () => {
    const actual = getMaxValue(0, 3, 4);
    const expected = 10;
    assert.deepEqual(actual, expected); 
  });

  it('all args equal 0, return 3', () => {
    const actual = getMaxValue(0, 0, 0);
    const expected = 3;
    assert.deepEqual(actual, expected); 
  });

  it('one or both args NaN or undefined return NaN', () => {
    const actual = getMaxValue('a', 3, undefined);
    const expected = 'non valid data';
    assert.deepEqual(actual, expected); 
  });
});

describe('getStudentMark', () => {

  it('if rating >= 0 and <= 19, return "F"', () => {
    const actual = getStudentMark(2);
    const expected = 'F';
    assert.deepEqual(actual, expected); 
  });

  it('if rating >= 20 and <= 39, return "E"', () => {
    const actual = getStudentMark(21);
    const expected = 'E';
    assert.deepEqual(actual, expected); 
  });

  it('if rating >= 40 and <= 59, return "D"', () => {
    const actual = getStudentMark(52);
    const expected = 'D';
    assert.deepEqual(actual, expected); 
  });

  it('if rating >= 60 and <= 74, return "C"', () => {
    const actual = getStudentMark(68);
    const expected = 'C';
    assert.deepEqual(actual, expected); 
  });

  it('if rating >= 75 and <= 89, return "B"', () =>{
    const actual = getStudentMark(81);
    const expected = 'B';
    assert.deepEqual(actual, expected); 
  });

  it('if rating >= 90 and <= 100, return "A"', () => {
    const actual = getStudentMark(90);
    const expected = 'A';
    assert.deepEqual(actual, expected); 
  });

  it('if rating > 100 and < 0, return "You are out of rating range"', () => {
    const actual = getStudentMark(200);
    const expected = 'You are out of rating range';
    assert.deepEqual(actual, expected); 
  });

  it('if argument is NaN return "non valid data"', () => {
    const actual = getStudentMark('a');
    const expected = 'non valid data';
    assert.deepEqual(actual, expected); ;
  });
});




