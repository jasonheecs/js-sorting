'use strict';

import {bubbleSort} from '../src/index.js';
import commonTests from './common.js';

const expect = (require('chai')).expect;

describe('test bubble sort', function () {
  commonTests(bubbleSort);
});
