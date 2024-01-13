import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';

function App() {
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
