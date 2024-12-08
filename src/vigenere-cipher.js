const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const item = message.at(i);
      if (this.#isUpperCase(item)) {
        result += String.fromCharCode((item.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65);
      } else {
        result += String.fromCharCode((item.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97);
      }
      j = ++j % key.length;
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const item = message.at(i);
      if (this.#isUpperCase(item)) {
        result += String.fromCharCode(90 - (25 - (item.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26);
      } else {
        result += String.fromCharCode(122 - (25 - (item.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26);
      }
      j = ++j % key.length;
    }
    return result;
  }
  
  #isUpperCase(str) {
    return str === str.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
