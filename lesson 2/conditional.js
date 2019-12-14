//conditional statements



function getSumOrMult(a, b) {
  a = Number(a);
  b = Number(b);
  if ((a ^ 0) !== a) return "non valid data";
  if (isNaN(a) || isNaN(b)) return "non valid data"
  return (a % 2 === 0) ? a * b: a + b
}

function getQuater(x, y) {
  x = Number(x);
  y = Number(y);
  let quaterNumber;

  if (isNaN(x) || isNaN(y)) return 'non valid data'

  if (x == 0 && y == 0) {
    quaterNumber = 'It`s the origin';
  } else if  (x > 0 && y > 0) {
    quaterNumber = 'First quater';
  } else if (x < 0 && y > 0) {
    quaterNumber = 'Second quater';
  } else if (x < 0 && y < 0) {
    quaterNumber = 'Third quater' ;
  } else if (x > 0 && y < 0) {
    quaterNumber = 'Fourth quater';
  } else if (x == 0) {
    quaterNumber = 'It`s axis Y';
  } else  if (y == 0) {
    quaterNumber = 'It`s axis X';
  }
  return quaterNumber;
}

function getSumOfPositiveNumbers(firstNum, secondNum, thirdNum) {
  let sum = 0;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  thirdNum = Number(thirdNum);
  if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) return 'non valid data'

  if (firstNum > 0) sum += firstNum;
  if (secondNum > 0) sum += secondNum;
  if (thirdNum > 0) sum += thirdNum;
    
  return sum;
}

function getMaxValue(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return 'non valid data';
  return (a*b*c > a+b+c) ? a*b*c + 3: a+b+c+3;
}

function getStudentMark(rating) {
  rating = Number(rating);
  if (isNaN(rating)) return 'non valid data';
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
  } else if (rating >= 90 && rating <= 100) {
    mark = 'A';
  } else if (rating < 0 || rating > 100) {
    mark = 'You are out of rating range'
  }

  return mark;
}

console.log(getSumOrMult(6,4));
console.log(getQuater(5,-7));
console.log(getSumOfPositiveNumbers(5, -8, 6));
console.log(getMaxValue(3,4,8));
console.log(getStudentMark(15));

