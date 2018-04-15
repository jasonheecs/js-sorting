'use strict';

/**
 * @param  {Array} elements
 */
export default (elements) => {
  let valueToInsert;
  let index;

  for (let i = 1; i <= elements.length; i++) {
    valueToInsert = elements[i];
    index = i;

    while (index > 0 && elements[index - 1] > valueToInsert) {
      elements[index] = elements[index - 1];
      index--;
    }

    if (index !== i) {
      elements[index] = valueToInsert;
    }
  }
};
