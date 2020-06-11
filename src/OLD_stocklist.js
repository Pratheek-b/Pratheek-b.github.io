import React from 'react';
import Card from './Card.js'

const Stocklist = ({ stocks }) => {
  const stockCard = stocks.map ((user, i) => {
    return <Card key={stocks[i].id} name={stocks[i].name} st_symbol={stocks[i].st_symbol} market={stocks[i].market} open={stocks[i].open} high={stocks[i].high} low={stocks[i].low} mkt_cap={stocks[i].mkt_cap} />
  })
  return(
      [stockCard]
  );
}

export default Stocklist;
