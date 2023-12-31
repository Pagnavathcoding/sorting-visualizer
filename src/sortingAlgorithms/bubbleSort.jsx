export function bubbleSort(array) {
    const animations = [];
    bubbleSortHelper(array, animations);
    return animations;
  }
  
  function bubbleSortHelper(array, animations) {
    let end = array.length - 1;
    while (end >= 1) {
      for (let j = 0; j < end; j++) {
        if (array[j] > array[j + 1]) {
          animations.push([j, j + 1]);
          animations.push([j, j + 1]);
          animations.push([j, array[j + 1]]);
          animations.push([j + 1, array[j]]);
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      end--;
    }
}