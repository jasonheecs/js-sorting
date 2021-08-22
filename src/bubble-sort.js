'use strict';

/**
 * @param  {Array} arr
 */
export default function (arr) {
  let isSorted = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(j - 1, j);
        isSorted = false;
      }
    }

    if (isSorted) return arr;
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
