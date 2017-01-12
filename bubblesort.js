function bubbleSort(arr){
  let  sorted = false
  let curLength = arr.length
  while (!sorted){
    sorted = true
    for (let i = 0; i < curLength - 1; i++){
      if (arr[i] > arr[i + 1]){
        sorted = false
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
    curLength--
  }
  return arr;
}
