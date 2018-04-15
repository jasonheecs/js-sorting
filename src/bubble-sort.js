'use strict';

import {swap} from './helper.js';

/**
 * @param  {Array} elements
 */
export default (elements) => {
  let swapCounter = -1;
  let limit = elements.length - 1;

  while (swapCounter !== 0) {
    swapCounter = 0;

    for (let i = 0; i < limit; i++) {
      if (elements[i] > elements[i + 1]) {
        swap(elements, i, i + 1);
        swapCounter++;
      }
    }

    limit--;
  }
};
