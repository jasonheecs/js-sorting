'use strict';

import { swap } from './helper.js';

/**
 * @param  {Array} elements
 * @return {Array}
 */
export default function bubbleSort (elements) {
  let done = false;
  let limit = elements.length - 1;

  while (!done) {
    done = true;

    for (let i = 0; i < limit; i++) {
      if (elements[i] > elements[i + 1]) {
        swap(elements, i, i + 1);
        done = false;
      }
    }

    limit--;
  }

  return elements;
};
