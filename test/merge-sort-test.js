'use strict';

import { mergeSort } from '../src/index.js';
import commonTests from './common.js';

describe('test merge sort', function () {
  commonTests(mergeSort);
});
