const PubSub = require('../helpers/pub_sub.js')

const PrimeNumber = function () {

};

PrimeNumber.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkPrime(inputtedNumber);
    PubSub.publish('PrimeNumber:result-calculated', result)

  });
};

PrimeNumber.prototype.checkPrime = function (number) {
  if (number <= 1) {
    return `${number} is not a prime number`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
};

module.exports = PrimeNumber;
