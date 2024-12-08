const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0){
    return [];
  }
  let result = [...arr];
  for (let i = 0; i < result.length; i += 1){
    if (result[i] === '--double-next'){
      if (typeof(result[i + 1] === 'object')){
        result[i] = Object.assign({}, result[i + 1]);
      }
      (result[i + 1] !== undefined) ? result.splice(i, 1, result[i +1]) : result.splice(i, 1);
    }
    if (result[i] === '--double-prev'){
      if (typeof(result[i - 1] === 'object')){
        result[i] = Object.assign({}, result[i - 1]);
      }
      (result[i - 1] !== undefined) ? result.splice(i, 1, result[i - 1]) : result.splice(i, 1);
    }
    if (result[i] === '--discard-prev'){
      if (result[i - 1] === undefined){
        result.splice(i, 1);
      } else {
        result[i - 1] = result[i - 1].toString() + "DISCARD";
        result[i] = result[i] + "DISCARD";
      }
    }
    if (result[i] === '--discard-next'){
      if (result[i + 1] === undefined){
        result.splice(i, 1);
      } else {
        result[i + 1] = result[i + 1].toString() + "DISCARD";
        result[i] = result[i] + "DISCARD";
      }
    }
  }
  for (let i = 0; i < result.length; i += 1){
  if (typeof(result[i]) === 'string' && result[i].indexOf('DISCARD') !== -1){
    result.splice(i, 1);
    i -= 1;
  }
}
  return result;
}

module.exports = {
  transform
};
