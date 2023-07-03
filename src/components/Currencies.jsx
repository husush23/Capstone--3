/*eslint-disable*/
import React, {useState} from 'react';
// import {fetchCrypto} from '../redux/features/moneySlice';
import {useSelector, useDispatch} from 'react-redux';
import Currency from './Currency';

function Currencies() {
  const dispatch = useDispatch();
  const currencyList = useSelector(state => state.crypto.currencies);
  // cryptoData.forEach(c => c.ticker === 'EUR/USD' && console.log(c.ticker));
  // console.log(currencyList[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = e => setSearchQuery(e.target.value);
  const filteredCurrencies = currencyList.filter(currency =>
    currency.ticker.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <input
        value={searchQuery}
        onChange={handleSearch}
        placeholder='search pairs'
      />
      {filteredCurrencies.map(currency => (
        <Currency
          currency={currency.ticker}
          bid={currency.bid}
          ask={currency.ask}
          open={currency.open}
          low={currency.low}
        />
      ))}
    </>
  );
}

export default Currencies;
