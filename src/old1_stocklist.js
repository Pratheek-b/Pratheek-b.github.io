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

  }


  render() {

    const fetchStock = (stk_name, st_symbol, i) => {
      let output_size = 'compact'
      const API_KEY = 'XRZ985YV8YDDBPB8';
      let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${st_symbol}&outputsize=${output_size}&apikey=${API_KEY}`;

      return fetch(API_CALL)
        .then(response => {
          return response.json();
        })



    }
    const stockCard = stocks.map(async (user, i) => {
      var stock_data = await fetchStock(stocks[i].name, stocks[i].st_symbol, i);
      console.log(stock_data);
      // let tsd = data['Time Series (Daily)'];
      // return (tsd && tsd["2020-01-2"]);
      // let open_val = stock_data["1. open"];
      // let high_val = stock_data["2. high"];
      // let low_val = stock_data["3. low"];
      // let close_val = stock_data["4. close"];
      // return <Card name={stocks[i].name} key={stocks[i].st_symbol} open={open_val} high={high_val} low={low_val} close={close_val} />
    })
    return (
      stockCard
    );
  }
}
export default Stocklist;
