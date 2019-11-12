function getMinElementInArray(array) {
 let minElem = array[0];
  
  for(let i = 1; i < array.length-1; i++) {
    if (array[i] < minElem) {
      minElem = array[i];
    } 
  }
  return minElem;
}

function getMaxElementInArray(array) {
  let maxElem = array[0];
  
  for(let i = 1; i < array.length-1; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i];
    } 
  }
  return maxElem;
}

function getMinIndexOfElementInArray(array) {
  let minElem = array[0];
  let index = 0;
  
  for(let i = 1; i < array.length-1; i++) {
    if (array[i] < minElem) {
      minElem = array[i]
      index = i;
    } 
  }
  return index;
}

function getMaxIndexOfElementInArray(array) {
  let maxElem = array[0];
  let index = 0;
  
  for(let i = 1; i < array.length-1; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i]
      index = i;
    } 
  }
  return index;
}

function getSumOfElemetsWithOddIndex(array) {
  let i = 1, sum = 0;
  
  while(i < array.length) {
    sum += array[i];
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

function getNumberOfOddElementsInArray(array) {
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
  
 for (let i = Math.floor(array.length / 2) + 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    newArr.push(array[i]);
  } 
  
  return newArr;
}

console.log(getMinElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMaxElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMinIndexOfElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getMaxIndexOfElementInArray([1, -16, 9, -7, 5, 3]));
console.log(getSumOfElemetsWithOddIndex([1, -16, 9, -7, 5, 3]))
console.log(getReversedArray([1, -16, 9, -7, 5, 3]));
console.log(getNumberOfOddElementsInArray([1, -16, 9, -7, 5, 3]));
console.log(swapTwoPartsOfArray([1, 2, 3, 4, 5]))
