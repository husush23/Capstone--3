/*eslint-disable*/
import React from 'react';

function Currency(props) {
  const {ask, bid, open, low, currency} = props;
  //   console.log(currency);
  return (
    <div className='card'>
      <h3>USD/EUR</h3>
      <span>top</span>
      <span>Low</span>
    </div>
  );
}

export default Currency;
