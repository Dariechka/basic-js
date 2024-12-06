const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  for (let i = 1; i <= options.repeatTimes; i += 1){
    let secondPart = '';
    for (let j = 1; j <= options.additionRepeatTimes; j += 1){
      if (!options.additionSeparator) {
        options.additionSeparator = '|';
      }
      if (j === options.additionRepeatTimes){
        secondPart += options.addition;
      } else {
        secondPart += options.addition + options.additionSeparator;
      }
    }
    if (!options.separator) {
      options.separator = '+';
    }
    if (options.addition && secondPart === ''){
      secondPart = options.addition;
    }
    if (i === options.repeatTimes) {
      result += str + secondPart;
    } else {
      result += str + secondPart + options.separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
