'use strict';

/**
 * @param  {Array} elements
 * @return {Array}
 */
export default function mergeSort (elements) {
  if (elements.length < 2) return elements;

  const mid = Math.floor(elements.length / 2);
  const arrayOne = elements.slice(0, mid);
  const arrayTwo = elements.slice(mid, elements.length);

  return merge(mergeSort(arrayOne), mergeSort(arrayTwo));
}

/**
 * @param  {Array} arrayOne
 * @param  {Array} arrayTwo
 * @return {Array}
 */
function merge (arrayOne, arrayTwo) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      mergedArr.push(arrayOne[i++]);
    } else {
      mergedArr.push(arrayTwo[j++]);
    }
  }

  while (i < arrayOne.length) {
    mergedArr.push(arrayOne[i++]);
  }

  while (j < arrayTwo.length) {
    mergedArr.push(arrayTwo[j++]);
  }

  return mergedArr;
}
