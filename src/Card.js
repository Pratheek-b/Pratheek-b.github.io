import React from 'react';
import 'tachyons';

const Card = (props) => {
  const { name, st_symbol, open, high, low, mkt_cap, id} = props;
  return(
    <div className = 'bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-4'>
      <img alt='stock' src=''  />
      <div>
        <h5>{name}(<span class='fw1 mid-gray'>{st_symbol}</span>)</h5>
        <p class='fw4'><b>Open</b> :{open}</p>
        <p class='fw4 green'><b>High</b> :{high}</p>
        <p class='fw4 light-red'><b>Low</b> :{low}</p>
        <p class='fw4 blue'><b>Market</b> Cap : {mkt_cap}</p>
      </div>
    </div>
  );
}

export default Card;
