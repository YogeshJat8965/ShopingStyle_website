import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';
import { useEffect, useState } from 'react';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const [initialNavigationDone, setInitialNavigationDone] = useState(false);

  useEffect(() => {
    if (!initialNavigationDone) {
      setInitialNavigationDone(true);
      if (location.pathname === '/') {
        navigate('/');
      }
    }
  }, [initialNavigationDone, location.pathname, navigate]);

  return (

    <div className='w-full flex flex-col justify-center  ' >

      <div className=' fixed top-0 z-10 w-full flex justify-center items-center border border-black bg-slate-900  ' >
        <Header></Header>
      </div>

      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/cart' element={<Cartpage></Cartpage>} ></Route>
      </Routes>

    </div>


  );
}

export default App;
