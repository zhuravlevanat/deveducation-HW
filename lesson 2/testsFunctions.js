describe('getDayName', () => {

  it('if argument equal 3, return "wednesday"', () => {
    const actual = getDayName(3);
    const expected = 'wednesday';
    assert.equal(actual, expected);
  });

  it('if argument < 1 && > 7, return "not valid data"', () => {
    const actual = getDayName(30);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if argument NaN or undefined, return "not valid data"', () => {
    const actual = getDayName('a');
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

describe('getDistance', () => {

  it('if coords equal -2.3, 4, 8.5, 0.7, return 11.29', () => {
    const actual = getDistance(-2.3, 4, 8.5, 0.7);
    const expected = 11.29;
    assert.equal(actual, expected);
  });

  it('if one or more coords equal NaN, return "not valid data"', () => {
    const actual = getDistance(-2.3, 4, 'a', 0.7);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });

  it('if number of coords < 4, return "not valid data"', () => {
    const actual = getDistance(-2.3, 4, 0.7);
    const expected = 'not valid data';
    assert.equal(actual, expected);
  });
});

