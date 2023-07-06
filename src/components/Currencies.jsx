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
          {filteredList.map((currency, index) => {
            let backgroundColor = '#3165c7';

            if (index > 0) {
              const groupIndex = Math.floor((index - 1) / 2);
              backgroundColor = groupIndex % 2 === 0 ? '#4679d8' : '#3165c7';
            }

            return (
              <Currency
                currency={currency.ticker}
                bid={currency.bid}
                ask={currency.ask}
                open={currency.open}
                low={currency.low}
                key={currency.ticker}
                style={{ backgroundColor }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Currencies;
