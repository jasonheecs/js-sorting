'use strict';

const expect = (require('chai')).expect;

/**
 * Checks if an array is sorted
 * @param  {Array} arr
 * @return {boolean}
 */
function arrayIsSorted (arr) {
  return arr.every((el, index) => el <= arr[index + 1] || index >= arr.length - 1);
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
      expectation(functionToTest(dataItem));
    };
  };

  data.forEach((dataItem) => {
    it(`with [${dataItem}]`, testFunc(dataItem, algoToTest, (testItem) => {
      /* eslint no-unused-expressions: "off" */
      expect(arrayIsSorted(testItem)).to.be.true;
    }));
  });

  it('with [1]', testFunc([1], algoToTest, (testItem) => {
    expect(testItem).to.deep.equal([1]);
  }));

  it('with empty array', testFunc([], algoToTest, (testItem) => {
    expect(testItem).to.deep.equal([]);
  }));

  it('with already sorted array', testFunc([1, 2, 3, 4, 5], algoToTest, (testItem) => {
    expect(arrayIsSorted(testItem)).to.be.true;
  }));

  it('with sorted array in reverse order', testFunc([5, 4, 3, 2, 1], algoToTest, (testItem) => {
    expect(arrayIsSorted(testItem)).to.be.true;
  }));

  it('with negative values', testFunc([-5, 2, -3, 1, 0], algoToTest, (testItem) => {
    expect(arrayIsSorted(testItem)).to.be.true;
  }));

  it('with repeated values', testFunc([1, 1, 1, 1, 1], algoToTest, (testItem) => {
    expect(arrayIsSorted(testItem)).to.be.true;
  }));
};
