import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import MainPage from './components/coinsInfo/CoinsInfo';



const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Login />} />
      <Route path='/main' element={<MainPage />} />



    </Routes>
  )
}

export default App
