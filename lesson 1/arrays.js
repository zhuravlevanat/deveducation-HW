function getMinElementInArray(array) {
  const arr = array;
  let minElem = arr[0];
  
  for(let i = 1; i < arr.length-1; i++) {
    if (arr[i] < minElem) {
      minElem = arr[i];
    } 
  }
  return minElem;
}

function getMaxElementInArray(array) {
  const arr = array;
  let maxElem = arr[0];
  
  for(let i = 1; i < arr.length-1; i++) {
    if (arr[i] > maxElem) {
      maxElem = arr[i];
    } 
  }
  return maxElem;
}

function getMinIndexOfElementInArray(array) {
  const arr = array;
  let minElem = arr[0];
  let index = 0;
  
  for(let i = 1; i < arr.length-1; i++) {
    if (arr[i] < minElem) {
      index = i;
    } 
  }
  return index;
}

function getMaxIndexOfElementInArray(array) {
  const arr = array;
  let maxElem = arr[0];
  let index = 0;
  
  for(let i = 1; i < arr.length-1; i++) {
    if (arr[i] > maxElem) {
      index = i;
    } 
  }
  return index;
}

function getSumOfElemetsWithEvenIndex(array) {
  const arr = array;
  let i = 1, sum = 0;
  
  while(i < arr.length) {
    sum += arr[i];
    i += 2;    
  }
  return sum;
}

function getReversedArray(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr[i] = array[array.length -1 -i];
  }

  return newArr;
}

function getNumberOfEvenElementsInArray(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result += 1;
    }
  }
  
  return result;
}

function swapTwoPartsOfArray(array) {
  let newArr = []; 
  
 for (let i = Math.floor(array.length / 2); i < array.length; i++) {
    newArr.push(array[i]);
  }
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    newArr.push(array[i]);
  } 
  
  return newArr;
}

console.log(getMinElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMaxElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMinIndexOfElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMaxIndexOfElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getSumOfElemetsWithEvenIndex([1, -16, 9, -7, 5, 3]))
console.log(getReversedArray([1, -16, 9, -7, 5, 3]));
console.log(getNumberOfEvenElementsInArray([1, -16, 9, -7, 5, 3]));
console.log(swapTwoPartsOfArray([1, -16, 9, -7, 5, 3]))
