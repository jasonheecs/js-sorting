'use strict';

const expect = (require('chai')).expect;

/**
 * Checks if an array is sorted
 * @param  {Array} arr
 * @return {boolean}
 */
function arrayIsSorted (arr) {
  return arr.every((el, index) => {
    if (index < arr.length - 1) {
      return (el <= arr[index + 1]);
    } else {
      return true;
    }
  });
}

/**
 * Generates a set of random array data for testing
 * @param  {number} maxLength Max array length of random data
 * @param  {number} minValue Minimum integer value of random data
 * @param  {number} maxValue  Maximum integer value of random data
 * @return {Array}
 */
function generateRandomData (maxLength, minValue, maxValue) {
  let dataLength = getRandomIntInclusive(1, maxLength);
  let randomData = [];

  for (let i = 0; i < dataLength; i++) {
    randomData.push(getRandomIntInclusive(minValue, maxValue));
  }

  return randomData;
}

/**
 * Generate a random integer number between min and max (inclusive)
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param  {Function} algoToTest Sorting algorithm to be tested
 */
export default (algoToTest) => {
  const data = [
    [5, 2, 1, 3, 6, 4],
    [64, 25, 12, 22, 11],
    [3, 3, 3, 2, 2, 2],
    ['z', 'f', 'e', 'x', 'y']
  ];

  for (let i = 0; i < 3; i++) {
    data.push(generateRandomData(getRandomIntInclusive(10, 100), getRandomIntInclusive(1, 1000), getRandomIntInclusive(1, 1000)));
  }

  const testFunc = (dataItem, functionToTest, expectation) => {
    return function () {
      functionToTest(dataItem);
      expectation(dataItem);
    };
  };

  data.forEach((dataItem) => {
    it(`with [${dataItem}]`, testFunc(dataItem, algoToTest, (testItem) => {
      /* eslint no-unused-expressions: "off" */
      expect(arrayIsSorted(testItem)).to.be.true;
    }));
  });

  it(`with [1]`, testFunc([1], algoToTest, (testItem) => {
    expect(testItem).to.deep.equal([1]);
  }));

  it(`with empty array`, testFunc([], algoToTest, (testItem) => {
    expect(testItem).to.deep.equal([]);
  }));
};
