/*eslint-disable*/
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Currency(props) {
  const {ask, bid, open, low, currency} = props;
  const navigate = useNavigate();

  const handleClick = () => {
    const detailsProps = {ask, bid, open, low, currency}; // Pass the data as props
    navigate('/details', {state: detailsProps});
  };

  return (
    <>
      <div className='card' onClick={handleClick}>
        <h3>{currency}</h3>
        <div className='values'>
          <div className='buy'>
            <span>&#8599;</span> &nbsp;
            <span>{parseFloat(low).toFixed(6)}</span>
          </div>
          <div className='sell'>
            <span>&#8600;</span> &nbsp;
            <span>{parseFloat(open).toFixed(6)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
