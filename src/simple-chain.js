const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null){
      this.chain.push('( null )');
     } else if (value === ' ') {
      this.chain.push('(  )');
     } else {
      this.chain.push(`( ${value.toString()} )`);
     }
     return this;
  },
  removeLink(position) {
    if(!Number.isFinite(position) || position > this.chain.length || position !== Math.ceil(position) || position <= 0){
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
