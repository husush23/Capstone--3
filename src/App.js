/*eslint-disable*/
import Currencies from './components/Currencies';
import Details from './components/Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {fetchCrypto} from './redux/features/moneySlice';
import Navigation from './components/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Currencies />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
