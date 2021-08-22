'use strict';

import { insertionSort } from '../src/index.js';
import commonTests from './common.js';

describe('test insertion sort', function () {
  commonTests(insertionSort);
});
