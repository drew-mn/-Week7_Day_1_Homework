const PubSub = require ('../helpers/pub_sub.js')
const ResultView = function(){


};
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const isNumPrime = event.detail;
    this.displayResult(isNumPrime);

  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = result

};

module.exports = ResultView;
