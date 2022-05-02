import React, { useState } from 'react';
import FormWithAnInput from './components/FormWithAnInput/FormWithAnInput';
import FormWithTwoInput from './components/FormWithTwoInput/FormWithTwoInput';
import FormLogin from './components/FormLogin/FormLogin';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
export default function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='FormLogin' element={<FormLogin />} />
          <Route path='Counter' element={<Counter/>} />
          <Route path='FormWithAnInput' element={<FormWithAnInput />} />
          <Route path='FormWithTwoInput' element={<FormWithTwoInput />} />
        </Routes>
      </section>
      <input checked={click} type="checkbox" id="navi-toggle" className='checkbox' onChange={handleClick} />
      <label htmlFor="navi-toggle" className='button'>
        <span className='icon'>&nbsp;</span>
      </label>
      <div className='background'>&nbsp;</div>
      <nav className='nav'>
        <ul className='list'>
          <Link onClick={handleClick} className='link' to='/FormLogin'>Login</Link>
          <Link onClick={handleClick} className='link' to='/'>Início</Link>
          <Link onClick={handleClick} className='link' to='/Counter'>Contador</Link>
          <Link onClick={handleClick} className='link' to='/FormWithAnInput'>Formulário 1</Link>
          <Link onClick={handleClick} className='link' to='/FormWithTwoInput'>Formulário 2 </Link>
        </ul>
      </nav>
    </>
  );
}