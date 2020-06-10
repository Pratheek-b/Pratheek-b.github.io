import React from 'react';

const Card = (props) => {
  const { name, st_symbol, open, high, low, mkt_cap, id} = props;
  return(
    <div className = 'bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-4'>
      <img alt='stock' src=''  />
      <div>
        <h3>{name}</h3>
        <h6><strong>{st_symbol}</strong></h6>
        <p><strong>Open :</strong>{open}</p>
        <p><strong>High :</strong>{high}</p>
        <p><strong>Low :</strong>{low}</p>
        <p><strong>Market Cap :</strong> {mkt_cap}</p>
      </div>
    </div>
  );
}

export default Card;
