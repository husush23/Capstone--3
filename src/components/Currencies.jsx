/*eslint-disable*/
import React, {useState} from 'react';
// import {fetchCrypto} from '../redux/features/moneySlice';
import {useSelector, useDispatch} from 'react-redux';
import Currency from './Currency';
import '../styles/currencies.css';

function Currencies() {
  const dispatch = useDispatch();
  const currencyList = useSelector(state => state.crypto.currencies);
  // console.log(currencyList);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = e => setSearchQuery(e.target.value);

  const filteredList = currencyList.filter(currency =>
    currency.ticker.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className='container'>
      <div className='form'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearch}
          placeholder='Search pairs'
        />
      </div>
      <div className='cards'>
        {filteredList.map(currency => (
          <Currency
            currency={currency.ticker}
            bid={currency.bid}
            ask={currency.ask}
            open={currency.open}
            low={currency.low}
            key={currency.ticker}
          />
        ))}
      </div>
    </div>
  );
}

export default Currencies;
