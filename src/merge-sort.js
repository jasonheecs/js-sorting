'use strict';

/**
 * @param  {Array} left
 * @param  {Array} right
 * @return {Array}
 */
function merge (left, right) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergedArr.push(left[i++]);
      } else {
        mergedArr.push(right[j++]);
      }
    } else if (i < left.length) {
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
  let length = elements.length;

  if (length < 2) {
    return elements;
  }

  let halfLength = Math.floor(length / 2);

  return merge(mergeSort(elements.slice(0, halfLength)), mergeSort(elements.slice(halfLength, length)));
};
