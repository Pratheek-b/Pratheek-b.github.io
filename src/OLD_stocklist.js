import React from 'react';
import Card from './Card.js'

const Stocklist = ({ stocks }) => {
  const stockCard = stocks.map ((user, i) => {
      let date_key = fetchStock(stocks[i].st_symbol);
      let open_val = date_key[Object.keys(date_key)[0]];
      let high_val = date_key[Object.keys(date_key)[1]];
      let low_val = date_key[Object.keys(date_key)[2]];
      let close_val = date_key[Object.keys(date_key)[3]];

        console.log(`name=${stocks[i].name} key=${stocks[i].st_symbol} open=${open_val} high=${high_val} low=${low_val} close=${close_val}`)// console.log(date_key[Object.keys(date_key)[0]]);
    return <Card name={stocks[i].name} key={stocks[i].st_symbol} open={open_val} high={high_val} low={low_val} close={close_val} />
        // let pointer = stock_value(['Time Series (Daily)'][key])
    })
    return(
        [stockCard]
    );
  }
  const fetchStock = (st_symbol) =>{
    let output_size = 'compact'
    const API_KEY = 'XRZ985YV8YDDBPB8';
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${st_symbol}&outputsize=${output_size}&apikey=${API_KEY}`;

      fetch(API_CALL)
      //   .then(response => {
      //   return response.json();
      // })
      .then(data => {
        // let ptr = data['Time Series (Daily)'][0][0]
        let tsd = data['Time Series (Daily)'];
        return tsd[Object.keys(tsd)[0]];

      })
  }


  export default Stocklist;
