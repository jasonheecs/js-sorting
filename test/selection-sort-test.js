'use strict';

import { selectionSort } from '../src/index.js';
import commonTests from './common.js';

describe('test selection sort', function () {
  commonTests(selectionSort);
});
