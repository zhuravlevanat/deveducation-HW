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
  if (number <= 0) return false;
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

function getFactorial(n) {
  if (n < 0) return 'Factorial for positive numbers';  
  
  return (n > 1) ? n * getFactorial(n - 1) : 1;
}

function getSumOfNumbers(number) {
  let num = number;
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
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
console.log(sqrt(64));
console.log(getFactorial(3));
console.log(getSumOfNumbers(4567));
console.log(getInverseNumber(4567));