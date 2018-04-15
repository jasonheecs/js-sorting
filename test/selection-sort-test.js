'use strict';

import {selectionSort} from '../src/index.js';

const expect = (require('chai')).expect;

describe('test selection sort', function () {
  it('with [5, 2, 1, 3, 6, 4]', function () {
    let elements = [5, 2, 1, 3, 6, 4];
    selectionSort(elements);

    expect(elements).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('with [64, 25, 12, 22, 11]', function () {
    let elements = [64, 25, 12, 22, 11];
    selectionSort(elements);

    expect(elements).to.deep.equal([11, 12, 22, 25, 64]);
  });

  it('with [3, 3, 3, 2, 2, 2]', function () {
    let elements = [3, 3, 3, 2, 2, 2];
    selectionSort(elements);

    expect(elements).to.deep.equal([2, 2, 2, 3, 3, 3]);
  });

  it('with [1]', function () {
    let elements = [1];
    selectionSort(elements);

    expect(elements).to.deep.equal([1]);
  });

  it('with empty array', function () {
    let elements = [];
    selectionSort(elements);

    expect(elements).to.deep.equal([]);
  });

  it('with [z, f, e, x, y]', function () {
    let elements = ['z', 'f', 'e', 'x', 'y'];
    selectionSort(elements);

    expect(elements).to.deep.equal(['e', 'f', 'x', 'y', 'z']);
  });
});
