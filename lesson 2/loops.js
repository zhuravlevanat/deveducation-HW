//Loops

function getSumOfEvenNumbers() {
  let sum = 0, quantity = 0;

  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      sum += i;
      quantity += 1;
    }
  }
  return `Sum of even numbers: ${sum}, quantity of even numbers: ${quantity}`
}

function isPrimeNumber(number) {
  number = Number(number);
  if (!isFinite(number) || isNaN(number) || (number ^ 0) !== number || number <= 0) return false;
  let rezult = number != 1;
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        rezult = false;
        break;
    }
  }
  return rezult;
}

function sqrt(number) {
  number = Number(number);
  if (number < 0 || !isFinite(number) || isNaN(number) || (number ^ 0) !== number) return 'not valid data'; 
  let low = 0, high = number;
    while(low <= high) {
      let middle = Math.floor((low + high) / 2);
      if (middle * middle > number) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }
    return high;
}

function getFactorial(number) {
  number = Number(number);
  if (number < 0 || !isFinite(number) || isNaN(number) || (number ^ 0) !== number) return 'not valid data'; 
  if (number < 0) return NaN;   
  let result = 1;
  for (i = 1; i <= number; i++) 
    result = result * i;
  return result;
}


function getSumOfNumbers(number) {
  number = Number(number);
  if (!isFinite(number) || isNaN(number) || (number ^ 0) !== number) return 'not valid data'; 
  if (number < 0) number = number*(-1);
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

function getInverseNumber(number) {
  let initialNumber = number, 
      reversedNumber = 0,
      remainder;
  
  while(initialNumber > 0) {
    remainder = initialNumber % 10;
    reversedNumber = reversedNumber*10 +remainder;
    initialNumber = Math.floor(parseInt(initialNumber/10));
  }

 return reversedNumber;
}



console.log(getSumOfEvenNumbers());
console.log(isPrimeNumber(1));
console.log(sqrt(-25));
console.log(getFactorial(3));
console.log(getSumOfNumbers(4567));
console.log(getInverseNumber(4567));