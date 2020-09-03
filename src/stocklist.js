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
    this.demofunc()
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
      console.log(stock_data.price.regularMarketOpen);
      let open_val = stock_data.price.regularMarketOpen;
      let high_val = stock_data.price.regularMarketDayHigh;
      let low_val = stock_data.price.regularMarketDayLow;
      let close_val = stock_data.price.regularMarketPreviousClose;
      stockCard.push(<Card name={stocks[i].name} key={stocks[i].st_symbol} open={open_val} high={high_val} low={low_val} close={close_val} />);
    };
    console.log('bro');
    this.setState({
      Posts: stockCard
    });
  }

  render() {

    // })
    return (
      <div>
        {this.state.Posts}
      </div>
    );
  }
}
export default Stocklist;
