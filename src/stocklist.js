import React, {
  Component
} from 'react';
import Card from './Card.js'
import {
  stocks
} from "./stocks.js"

class Stocklist extends Component {
  constructor() {
    super()
    this.state = {
      stocks_local: []
    }
  }

  componentDidMount() {
    // this.demofunc()
  }

  demofunc = async () => {
    var yahooFinance = require('yahoo-finance');
    const fetchStock = (st_symbol) => {
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

    // const stockCard = stocks.map(async(user, i) => {
    const stockCard = [];
     for(let i=0;i<stocks.length;i++) {
    // const stockCard = []
    // stocks.forEach(async (user, i) => {
      var stock_data = await fetchStock(stocks[i].st_symbol);
      //        .then(response => {
      // console.log(response);
      // console.log(stock_data);
      // console.log(stock_data.price);
      let long_name = stock_data.price.longName;
      let open_val = stock_data.price.regularMarketOpen;
      let high_val = stock_data.price.regularMarketDayHigh;
      let low_val = stock_data.price.regularMarketDayLow;
      let close_val = stock_data.price.regularMarketPreviousClose;
      let mkt_cap = (stock_data.price.marketCap)/1000000000;
      let currency = stock_data.price.currency;
      stockCard.push(<Card name={long_name} key={stocks[i].st_symbol} open={open_val} high={high_val} low={low_val} close={close_val} mkt_cap={mkt_cap.toFixed(4)} currency={currency} st_symbol={stocks[i].st_symbol} />);
    };
    // console.log('bro');
    this.setState({
      Posts: stockCard
    });
  }

  render() {
    
    this.demofunc()
    
    // })
    return (
      <div>
        {this.state.Posts}
      </div>
    );
  }
}
export default Stocklist;
