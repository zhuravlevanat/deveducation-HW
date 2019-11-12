function bubbleSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;        
      }      
    }
    if (minIndex != i) {
    const temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let elem = array[i], j;    
    for (j = i; j >= 0 && array[j-1] > elem; j--) {
      array[j] = array[j-1];
    }
    array[j] = elem;
  }
  return array;
}

function quickSort(array) {
	if (array.length <= 1) { 
		return array;
	} else {

		const firstArr = [];
		const secondArr = [];
		const pivot = array[0];
		
		for (var i = 1; i < array.length; i++) {
			if (array[i] <= pivot) {
				firstArr[firstArr.length] = array[i];
			} else {
				secondArr[secondArr.length] = array[i];
			}
		}
		return quickSort(firstArr).concat(pivot, quickSort(secondArr));
	}
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length/2);
  const firstArr = array.slice(0, middle);
  const secondArr = array.slice(middle);

  return merge(mergeSort(firstArr), mergeSort(secondArr));
}

function merge(firstArr, secondArr) {
  const newArr = [];
  let i = j = 0;

  while (i< firstArr.length && j < secondArr.length) {
    const elem = (firstArr[i] < secondArr[j]) ? firstArr[i++] : secondArr[j++];
    newArr.push(elem);
  }

  return newArr.concat(firstArr.slice(i), secondArr.slice(j));
}


console.log(bubbleSort([3, -7, 8, 12, -9, 10]));
console.log(selectionSort([3, -7, 8, 12, -9, 10]));
console.log(insertionSort([3, -7, 8, 12, -9, 10]));
console.log(quickSort([3, -7, 8, 12, -9, 10]));
console.log(mergeSort([3, -7, 8, 12, -9, 10]));

