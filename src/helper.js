'use strict';

export function swap (array, index1, index2) {
  let tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}
