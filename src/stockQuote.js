import React, {Component} from 'react';

var yahooFinance = require('yahoo-finance');
const fetchQuote = (st_symbol) => {
  return yahooFinance.quote({
    symbol: st_symbol,
    modules: ['price', 'summaryDetail'] // see the docs for the full list
  }, function (err, quotes) {
    // console.log(quotes);
    return (quotes);
  })
    .then(response => { return response })
    .then(data => {
      // console.log(data);
      return data
    });
}

export default fetchQuote;