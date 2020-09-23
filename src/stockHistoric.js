import React, { Component } from 'react';

var yahooFinance = require('yahoo-finance');
const fetchHistoric = (st_symbol) => {
  yahooFinance.historical({
    symbol: st_symbol,
    from: '2012-01-01',
    to: '2012-12-31',
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, function (err, quotes) {
    return (quotes);
  })
    .then(response => { return response })
    .then(data => {
      return data
    });
}

export default fetchHistoric;