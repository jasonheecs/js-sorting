'use strict';

/**
 * @param  {Array} arr
 */
export default function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(minIndex, i);
    }
  }

  return arr;

  /**
   * @param  {number} i
   * @param  {number} j
   */
  function swap (i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
