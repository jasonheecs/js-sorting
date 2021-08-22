'use strict';

/**
 * @param  {Array} left
 * @param  {Array} right
 * @return {Array}
 */
function merge (left, right) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length || j < right.length) {
    if (i < left.length) {
      if (j < right.length && right[j] < left[i]) {
        mergedArr.push(right[j++]);
        continue;
      }

      mergedArr.push(left[i++]);
    } else {
      mergedArr.push(right[j++]);
    }
  }

  return mergedArr;
}

/**
 * @param  {Array} elements
 * @return {Array}
 */
export default function mergeSort (elements) {
  const length = elements.length;

  if (length < 2) {
    return elements;
  }

  const halfLength = Math.floor(length / 2);

  return merge(mergeSort(elements.slice(0, halfLength)), mergeSort(elements.slice(halfLength, length)));
};
