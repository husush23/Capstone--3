/*eslint-disable*/
import React from 'react';

function Currency(props) {
  const {ask, bid, open, low, currency} = props;

  return (
    <div className='card'>
      <h3>USD/EUR</h3>
      <span>{ask}</span>
      <span>{bid}</span>
    </div>
  );
}

export default Currency;
