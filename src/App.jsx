import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Home from './Forms/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='navbar'>
    <NavLink to='/' className='nav'>Home</NavLink>
    <NavLink to='/register' className='nav'>Register</NavLink>
    <NavLink to='/login' className='nav'>Login</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
