import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Currency from './Currency';
import Navbar from './Navbar';
import '../styles/currencies.css';

function Currencies() {
  const currencyList = useSelector((state) => state.crypto.currencies);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredList = currencyList.filter((currency) => currency.ticker.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search pairs"
          />
        </div>
        <div className="cards">
          {filteredList.map((currency, index) => (
            <Currency
              currency={currency.ticker}
              bid={currency.bid}
              ask={currency.ask}
              open={currency.open}
              low={currency.low}
              key={currency.ticker}
              style={{
                backgroundColor: index % 2 === 0 ? '#3165c7' : '#4369b2',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Currencies;
