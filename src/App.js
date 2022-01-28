import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import ButtonsProblem from './components/ButtonProblem';
import Form from './components/Form';
import Fruits from './components/Fruits';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
import { Vegetables } from './components/Vegetables';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fruits' element={<Fruits />} />
        <Route path='/vegetables' element={<Vegetables />} />
        <Route path='/sample-form' element={<Auth><Form /></Auth>} />
        <Route path='/buttons-problem' element={<ButtonsProblem />} />
        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
