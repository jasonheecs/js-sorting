# Sorting Algorithms in Javascript
[![Build Status](https://travis-ci.org/jasonheecs/js-sorting.svg?branch=master)](https://travis-ci.org/jasonheecs/js-sorting) [![Coverage Status](https://coveralls.io/repos/github/jasonheecs/js-sorting/badge.svg)](https://coveralls.io/github/jasonheecs/js-sorting)

A package containing implementations of various sorting algorithms in Javascript. This project is mainly a learning exercise and personal refresher on the common CS sorting algos, in addition to playing around with test coverage reports with [coveralls](https://coveralls.io/)

## Installation
`npm install @jasonheecs/js-sorting --save`

## Usage
```js
    var {selectionSort} = require('@jasonheecs/js-sorting');
    var {bubbleSort} = require('@jasonheecs/js-sorting');
    var {insertionSort} = require('@jasonheecs/js-sorting');
    var {mergeSort} = require('@jasonheecs/js-sorting');
    var {quickSort} = require('@jasonheecs/js-sorting');

    var items = [5, 2, 1, 3, 6, 4];

    console.log(selectionSort(items));
    console.log(bubbleSort(items));
    console.log(insertionSort(items));
    console.log(mergeSort(items));
    console.log(quickSort(items));
```

## Running unit tests
`npm test`

To run a specific test file, you can use an extra `--` to pass the filename through:
`npm test -- test/bubble-sort-test.js`

## License
MIT