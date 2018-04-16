'use strict';

import {swap} from './helper.js';

/**
 * @param  {Array} elements
 * @param  {number} left
 * @param  {number} right
 * @return {Array}
 */
function quickSort (elements, left, right) {
  if (left < right) {
    let partitionIndex = partition(elements, left, right);

    quickSort(elements, left, partitionIndex - 1);
    quickSort(elements, partitionIndex + 1, right);
  }

  return elements;
}

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
 * @return {Array}
 */
export default (elements) => {
  if (elements.length < 2) {
    return elements;
  }

  return quickSort(elements, 0, elements.length - 1);
};
