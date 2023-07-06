/*eslint-disable*/
import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import CurrencyMock from './CurrencyMock';

function CurrenciesMock() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='form'>
          <input type='text' />
        </div>
        <div className='cards'>
          <CurrencyMock />
        </div>
      </div>
    </>
  );
}

export default CurrenciesMock;
