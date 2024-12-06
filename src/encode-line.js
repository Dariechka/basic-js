const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let arr = [];
  let count = 1;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] === array[i + 1]){
      count += 1;
    } else {
       arr.push(count + array[i]);
       count = 1;
    }
  }
  return arr.join('').split('').filter(item => item !== '1').join('');
}

module.exports = {
  encodeLine
};
