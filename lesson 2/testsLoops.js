describe('isPrimeNumber', function() {

  it('если number простое число, return true', function() {
    assert.equal(isPrimeNumber(7), true);
  });

  it('если number составное число, return false', function() {
    assert.equal(isPrimeNumber(6), false);
  });

  it('для отрицательных number, return false', function() {
    assert.equal(isPrimeNumber(-6), false);
  });

  it('для безконечно большого числа, return false', function() {
    assert.equal(isPrimeNumber(Infinity), false);
  });

  it('для number равно 0, return false', function() {
    assert.equal(isPrimeNumber(0), false);
  });

  it('для number равно 1, return false', function() {
    assert.equal(isPrimeNumber(1), false);
  });

  it('для дробных number, return false', function() {
    assert.equal(isPrimeNumber(0.5), false);
  });

  it('для number равного NaN, return false', function() {
    assert.equal(isPrimeNumber(NaN), false);
  });

  it('для number равного undefined, return false', function() {
    assert.equal(isPrimeNumber(undefined), false);
  });

 });

 describe('sqrt', function() {

  it('корень с натурального числа 25, return 5', function() {
    assert.equal(sqrt(25), 5);
  });

  it('корень с отрицательного числа -25, return NaN', function() {
    assert.isNaN(sqrt(-25));
  });

  it('корень с числа 0, return 0', function() {
    assert.equal(sqrt(0), 0);
  });

  it('корень с дробных чисел, return NaN', function() {
    assert.isNaN(sqrt(0.5));
  });

  it('корень с безконечно большого числа, return NaN', function() {
    assert.isNaN(sqrt(Infinity));
  });

  it('корень с NaN, return NaN', function() {
    assert.isNaN(sqrt(NaN));
  });

  it('корень с undefined, return NaN', function() {
    assert.isNaN(sqrt(undefined));
  });

 });

 describe('getFactorial', function() {

  it('факториал для числа 5, return 120', function() {
    assert.equal(getFactorial(5), 120);
  });

  it('факториал для числа 0, return 1', function() {
    assert.equal(getFactorial(0), 1);
  });

  it('факториал для числа 1, return 1', function() {
    assert.equal(getFactorial(1), 1);
  });

  it('факториал для отрицательного числа, return NaN', function() {
    assert.deepEqual(getFactorial(-5), NaN);
  });

  it('факториал для дробного числа, return NaN', function() {
    assert.isNaN(getFactorial(0.5));
  });

  it('факториал для безконечно большого числа, return NaN', function() {
    assert.isNaN(getFactorial(Infinity));
  });

  it('факториал для NaN, return NaN', function() {
    assert.isNaN(getFactorial(NaN));
  });

  it('факториал для undefined, return NaN', function() {
    assert.isNaN(getFactorial(undefined));
  });

 });

 describe('getSumOfNumbers', function() {

  it('сумма цифр для числа 578, return 20', function() {
    assert.equal(getSumOfNumbers(578), 20);
  });

  it('сумма цифр для числа -578, return 20', function() {
    assert.equal(getSumOfNumbers(-578), 20);
  });

  it('сумма цифр для числа 0, return 0', function() {
    assert.equal(getSumOfNumbers(0), 0);
  });

  it('сумма цифр для дробного числа, return NaN', function() {
    assert.isNaN(getSumOfNumbers(0.5));
  });

  it('сумма цифр для безконечно большого числа, return NaN', function() {
    assert.isNaN(getSumOfNumbers(Infinity));
  });

  it('сумма цифр для NaN, return NaN', function() {
    assert.isNaN(getSumOfNumbers(NaN));
  });

  it('сумма цифр для undefined, return NaN', function() {
    assert.isNaN(getSumOfNumbers(undefined));
  });

});

