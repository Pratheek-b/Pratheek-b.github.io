import React, {
    Component
  } from 'react';
  import Card from './Card.js'
  import {
    stocks
  } from "./stocks.js"


  class Historic extends Component {
    constructor() {
      super()
      this.state = {
        stocks_local: []
      }
    }

    const fetchHistoric = (stocks) => {
        yahooFinance.historical({
            symbol: 'AAPL',
            from: '2012-01-01',
            to: '2012-12-31',
            // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
          }, function (err, quotes) {
            //...
          });
    }

}