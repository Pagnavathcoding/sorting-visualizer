
export function selectionSort(array) {
    const animations = [];
    selectionSortHelper(array, animations);
    return animations;
  }
  
  function selectionSortHelper(array, animations) {
    for (let i = 0; i < array.length - 1; i++) {
      let smallest = array[i];
      let smallestIdx = i;
      for (let j = i + 1; j < array.length; j++) {
        animations.push([smallestIdx, j]);
        animations.push([smallestIdx, j]);
        animations.push([0, array[0]]);
        animations.push([0, array[0]]);
        if (array[j] < smallest) {
          smallest = array[j];
          smallestIdx = j;
        }
      }
      animations.push([i, smallestIdx]);
      animations.push([i, smallestIdx]);
      animations.push([i, smallest]);
      animations.push([smallestIdx, array[i]]);
      let temp = array[i];
      array[i] = smallest;
      array[smallestIdx] = temp;
    }
  }