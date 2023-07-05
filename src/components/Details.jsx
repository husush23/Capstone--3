/*eslint-disable*/
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const {ask, bid, open, low, currency} = location.state;

  const goBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h3>{currency}</h3>

        <p>Ask:&nbsp; {ask}</p>
        <p>Bid:&nbsp; {bid}</p>
        <p>Open:&nbsp; {open}</p>
        <p>Low: &nbsp;{low}</p>
        <span className='back' onClick={goBack}>

        <p>
          Ask:&nbsp;
          {ask}
        </p>
        <p>
          Bid:&nbsp;
          {bid}
        </p>
        <p>
          Open:&nbsp;
          {open}
        </p>
        <p>
          Low: &nbsp;
          {low}
        </p>
        <button onClick={goBack} type="submit" className="back">

          &#8592;
        </span>
      </div>
    </div>
  );
}

export default Details;
