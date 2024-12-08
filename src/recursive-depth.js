const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, n) {
    n = n || 1;
    if (arr.filter(item => !Array.isArray(item)).length === arr.length){
      return n;
    } else {
      let newArr = arr.map(item => {
        if (Array.isArray(item)) {
          return this.calculateDepth(item, n + 1);
        } else {
          return n;
        }
      });
      return Math.max(...newArr);
    }
  }
}

module.exports = {
  DepthCalculator
};
