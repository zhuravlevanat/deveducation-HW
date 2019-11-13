describe('getSumOrMult', function() {

  it('первый аргумент четный 2, return произведение аргументов 6', function() {
    assert.equal(getSumOrMult(2, 3), 6);
  });

  it('первый аргумент нечетный 3, return суму аргументов 5', function() {
    assert.equal(getSumOrMult(3, 2), 5);
  });

  it('если первый аргумент 0 return 0', function() {
    assert.deepEqual(getSumOrMult(0, 2), 0);
  });

  it('если первый аргумент дробное число return "non valid data""non valid data"', function() {
    assert.deepEqual(getSumOrMult(0.5, 2), "non valid data");
  });

  it('если первый или оба аргументы undefined return "non valid data"', function() {
    assert.deepEqual(getSumOrMult(undefined, 2), "non valid data");
  });

  it('если один или оба аргументы NaN, return "non valid data"', function() {
    assert.deepEqual(getSumOrMult('a', 2), "non valid data");
  }); 

});

describe('getQuater', function() {

  it('первый аргумент > 0, второй аргумент > 0, return "First quater"', function() {
    assert.equal(getQuater(5, 7), 'First quater');
  });

  it('первый аргумент < 0, второй аргумент > 0, return "Second quater"', function() {
    assert.equal(getQuater(-5, 7), 'Second quater');
  });

  it('первый аргумент < 0, второй аргумент < 0, return "Third quater"', function() {
    assert.equal(getQuater(-5, -7), 'Third quater');
  });

  it('первый аргумент > 0, второй аргумент < 0, return "Fourth quater"', function() {
    assert.equal(getQuater(5, -7), 'Fourth quater');
  });

  it('первый аргумент 0, второй аргумент не равен 0, return "It`s the origin"', function() {
    assert.equal(getQuater(0, 0), 'It`s the origin');
  });

  it('первый аргумент > 0, второй аргумент не равен 0, return "It`s axis Y"', function() {
    assert.equal(getQuater(0, 2), 'It`s axis Y');
  });

  it('первый аргумент не равен 0, второй аргумент 0 return "It`s axis X"', function() {
    assert.equal(getQuater(2, 0), 'It`s axis X');
  });

  it('один или оба аргумента NaN, return NaN', function() {
    assert.deepEqual(getQuater('a', 2), NaN);
  });

  it('один или оба аргумента undefined return NaN', function() {
    assert.deepEqual(getQuater(undefined, 2), NaN);
  });
});

describe('getSumOfPositiveNumbers', function() {

  it('первый аргумент 2 > 0, другие < 0 return первый 2', function() {
    assert.equal(getSumOfPositiveNumbers(2, -3, -4), 2);
  });

  it('первый и второй аргумент 2,3 > 0, тритий < 0 return 5', function() {
    assert.equal(getSumOfPositiveNumbers(2, 3, -4), 5);
  });

  it('все три аргумента 2,3,4 > 0, return 9', function() {
    assert.equal(getSumOfPositiveNumbers(2, 3, 4), 9);
  });

  it('один или больше аргументов NaN return NaN', function() {
    assert.deepEqual(getSumOfPositiveNumbers('a', 3, 4), NaN);
  });

  it('один или больше аргументов undefined, return NaN', function() {
    assert.deepEqual(getSumOfPositiveNumbers(undefined, 3, 4), NaN);
  }); 

});

describe('getMaxValue', function() {

  it('все аргументы 2,3,4 > 0 , return 27', function() {
    assert.equal(getMaxValue(2, 3, 4), 27);
  });

  it('все аргументы 2,3,4 < 0, return -6', function() {
    assert.equal(getMaxValue(-2, -3, -4), -6);
  });

  it('если один или несколько аргументов 0, return сумму аргументов + 3', function() {
    assert.equal(getMaxValue(0, 3, 4), 10);
  });

  it('если все аргументы 0, return 3', function() {
    assert.equal(getMaxValue(0, 0, 0), 3);
  });

  it('один или больше аргументов NaN return NaN', function() {
    assert.deepEqual(getMaxValue('a', 3, 4), NaN);
  });

  it('один или больше аргументов undefined, return NaN', function() {
    assert.deepEqual(getMaxValue(undefined, 3, 4), NaN);
  }); 

});

describe('getStudentMark', function() {

  it('if rating >= 0 and <= 19, return "F"', function() {
    assert.equal(getStudentMark(2), "F");
  });

  it('if rating >= 20 and <= 39, return "E"', function() {
    assert.equal(getStudentMark(21), "E");
  });

  it('if rating >= 40 and <= 59, return "D"', function() {
    assert.equal(getStudentMark(52), "D");
  });

  it('if rating >= 60 and <= 74, return "C"', function() {
    assert.equal(getStudentMark(68), "C");
  });

  it('if rating >= 75 and <= 89, return "B"', function() {
    assert.equal(getStudentMark(81), "B");
  });

  it('if rating >= 90 and <= 100, return "A"', function() {
    assert.equal(getStudentMark(90), "A");
  });

  it('if rating > 100 and < 0, return "You are out of rating range"', function() {
    assert.equal(getStudentMark(200), "You are out of rating range");
  });

  it('if argument is NaN return NaN', function() {
    assert.deepEqual(getStudentMark(NaN), NaN);
  });

  it('if argument is undefined, return NaN', function() {
    assert.deepEqual(getStudentMark(undefined), NaN);
  }); 

});




