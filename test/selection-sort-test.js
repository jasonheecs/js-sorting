'use strict';

import {selectionSort} from '../src/index.js';
import commonTests from './common.js';

const expect = (require('chai')).expect;

describe('test selection sort', function () {
  commonTests(selectionSort);
});
