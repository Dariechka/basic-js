const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i += 1){
    let arr = names.slice(0, i);
    if (arr.includes(names[i])){
      let count = 1;
      start = arr.indexOf(names[i]) + 1;
      names[i] = names[i] + `(${count})`;
      while (arr.includes(names[i])) {
         count += 1;
         names[i] = names[i].split('').map((item, index) => (index === names[i].split('').length - 2) ? count : item).join('');
         start = arr.indexOf(names[i]) + 1;
          arr = arr.slice(start);
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
