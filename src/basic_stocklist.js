import React from 'react';
import Card from './Card.js'

const Stocklist = ({ stocks }) => {
  const stockCard = stocks.map ((stock, i) => {
    return <Card key={stock.id} name={stock.name} st_symbol={stock.st_symbol} market={stock.market} open={stock.open} high={stock.high} low={stock.low} mkt_cap={stock.mkt_cap} />
  })
  return stockCard ;
}

export default Stocklist;
