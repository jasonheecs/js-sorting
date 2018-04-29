'use strict';

import {swap} from './helper.js';

/**
 * @param  {Array} elements
 * @param  {number} left
 * @param  {number} right
 * @return {Array}
 */
function partition (elements, left, right) {
  let pivot = elements[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (elements[i] < pivot) {
      swap(elements, i, partitionIndex++);
    }
  }

  swap(elements, right, partitionIndex);

  return partitionIndex;
}

/**
 * @param  {Array} elements
 * @param  {number} left
 * @param  {number} right
 * @return {Array}
 */
export default function quickSort (elements, left = 0, right = (elements.length - 1)) {
  if (elements.length > 1 && left < right) {
    let partitionIndex = partition(elements, left, right);

    quickSort(elements, left, partitionIndex - 1);
    quickSort(elements, partitionIndex + 1, right);
  }

  return elements;
};
