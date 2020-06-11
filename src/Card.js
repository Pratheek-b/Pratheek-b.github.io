import React from 'react';
import 'tachyons';

const Card = (props) => {
  const { name, st_symbol, open, high, low, close} = props;
  return(
    <div className = 'bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-4'>
      <div>
        <h5>{name}(<span className='fw1 mid-gray'>{st_symbol}</span>)</h5>
        <p className='fw4'><b>Open</b> :{open}</p>
        <p className='fw4 green'><b>High</b> :{high}</p>
        <p className='fw4 light-red'><b>Low</b> :{low}</p>
        <p className='fw4 blue'><b>Close</b> : {close}</p>
      </div>
      <img alt='Graph_Placeholder' src=''  />
    </div>
  );
}

export default Card;
