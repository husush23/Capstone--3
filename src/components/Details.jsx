/*eslint-disable*/
import React from 'react';
import {useLocation} from 'react-router-dom';

function Details() {
  const location = useLocation();
  const {ask, bid, open, low, currency} = location.state;

  const close = () => {
    // Implement close functionality here
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h3>{currency}</h3>
        <p>Ask: {ask}</p>
        <p>Bid: {bid}</p>
        <p>Open: {open}</p>
        <p>Low: {low}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default Details;
