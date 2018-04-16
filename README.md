# Sorting Algorithms in Javascript
A package containing implementations of various sorting algorithms in Javascript. This project is mainly a learning exercise and personal refresher on the common CS sorting algos.

## Installation
`npm install @username/project-name --save`

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
`npm run test`

## License
MIT