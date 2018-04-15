'use strict';

import {swap} from './helper.js';

function findSmallestElementIndex (elements, startIndex) {
  let smallestElement = elements[startIndex];
  let smallestElementIndex = startIndex;

  for (let i = startIndex + 1; i < elements.length; i++) {
    if (elements[i] < smallestElement) {
      smallestElement = elements[i];
      smallestElementIndex = i;
    }
  }

  return smallestElementIndex;
}

export default (elements) => {
  elements.forEach((el, index) => {
    let smallestElementIndex = findSmallestElementIndex(elements, index);

    if (smallestElementIndex !== index) {
      swap(elements, smallestElementIndex, index);
    }
  });
};
