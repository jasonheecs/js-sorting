'use strict';

import {quickSort} from '../src/index.js';
import commonTests from './common.js';

describe('test quick sort', function () {
  commonTests(quickSort);
});
