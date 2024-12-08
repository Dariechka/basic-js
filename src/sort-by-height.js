const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = arr;
  copy = copy.filter(item => item != -1).sort((a, b) => a - b);
  let count = 0;
  return arr.map(item => {
    if (item === -1){
      return item;
    } else {
      count += 1;
      return copy[count - 1];
    }
  });
}

module.exports = {
  sortByHeight
};
