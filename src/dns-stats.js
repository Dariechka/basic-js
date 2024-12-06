const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  for (let i = 0; i < domains.length; i += 1){
    let arr = domains[i].split('.').reverse().map(item => '.' + item);
    let key = '';
    for (let j = 0; j < arr.length; j += 1){
      key += arr[j]
      if(map.has(key)){
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    }
  }
  const result = {};
  for (let key of map.keys()) {
    result[key] = map.get(key);
  }
  return result;
}

module.exports = {
  getDNSStats
};
