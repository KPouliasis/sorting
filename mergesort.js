function mergeSort(arr) {
  if (!arr.length) {return arr}
  if (arr.length === 1) return arr
  else {
      let left  = mergeSort(arr.slice(0, arr.length / 2))
      let right = mergeSort(arr.slice(arr.length / 2))
      return merge(left, right)
  }
}

function merge(arrLeft, arrRight) {
  let newArray = [];
  let leftPosition = 0;
  let rightPosition = 0;
  while (leftPosition < arrLeft.length && rightPosition < arrRight.length){
      if (arrLeft[leftPosition] < arrRight[rightPosition]) {
        newArray.push(arrLeft[leftPosition]);
        leftPosition++;
      } else {
        newArray.push(arrRight[rightPosition]);
        rightPosition++;
      }
    }

    newArray = newArray.concat(arrLeft.slice(leftPosition));
    newArray = newArray.concat(arrRight.slice(rightPosition));
    return newArray;
}
