describe('getDayName', function() {

  it('если аргумент равен 3, return "wednesday"', function() {
    assert.equal(getDayName(3), "wednesday");
  });

  it('если аргумент меньше 1 и больше 7 return "not valid data"', function() {
    assert.equal(getDayName(10), "not valid data");
  });

  it('если аргумент NaN, return "not valid data"', function() {
    assert.deepEqual(getDayName(NaN), "not valid data");
  }); 

  it('если аргумент undefined, return "not valid data"', function() {
    assert.deepEqual(getDayName(undefined), "not valid data");
  }); 
});

describe('getDistance', function() {

  it('если координаты равны -2.3, 4, 8.5, 0.7, return 11.29', function() {
    assert.equal(getDistance(-2.3, 4, 8.5, 0.7), 11.29);
  });

  it('если все или одна из координат NaN, return "not valid data"', function() {
    assert.equal(getDistance(-2.3, NaN, 8.5, 0.7), "not valid data");
  });

  it('если все или одна из координат undefined, return "not valid data"', function() {
    assert.equal(getDistance(-2.3, 8.5, undefined, 0.7), "not valid data");
  }); 

  it('если количество аргументов не равно 4, return "not valid data"', function() {
    assert.deepEqual(getDistance(-2.3, 4, 8.5), "not valid data");
  }); 

});