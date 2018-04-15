'use strict';

import {bubbleSort} from '../src/index.js';
import commonTests from './common.js';

describe('test bubble sort', function () {
  commonTests(bubbleSort);
});
