//conditional statements

function getSumOrMult(a, b) {
  return (a % 2 === 0) ? a * b: a + b
}

function getQuater(x, y) {
  let quaterNumber;

  if (x > 0 && y > 0) {
    quaterNumber = 'First quater';
  } else if (x < 0 && y > 0) {
    quaterNumber = 'Second quater';
  } else if (x < 0 && y < 0) {
    quaterNumber = 'Third quater' ;
  } else if (x > 0 && y < 0) {
    quaterNumber = 'Fourth quater'
  }

  return quaterNumber;
}

function getSumOfPositiveNumbers(firstNum, secondNum, thirdNum) {
  const arr = [firstNum, secondNum, thirdNum];

  return arr.filter(el => el > 0).reduce((acc, curVal) => acc + curVal, 0);
}

function getMaxValue(a, b, c) {
  return Math.max(a*b*c, a+b+c) + 3
}

function getStudentMark(rating) {
  let mark;

  if (rating >= 0 && rating <= 19) {
    mark = 'F';
  } else if (rating >= 20 && rating <= 39) {
    mark = 'E';
  } else if (rating >= 40 && rating <= 59) {
    mark = 'D';
  } else if (rating >= 60 && rating <= 74) {
    mark = 'C';
  } else if (rating >= 75 && rating <= 89) {
    mark = 'B';
  } else if (rating >= 90 && rating <= 39) {
    mark = 'A';
  }

  return mark;
}

console.log(getSumOrMult(6,4));
console.log(getQuater(5,-7));
console.log(getSumOfPositiveNumbers(5, -8, 6));
console.log(getMaxValue(3,4,8))

