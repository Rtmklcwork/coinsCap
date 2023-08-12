import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import MainPage from './components/coinsInfo/CoinsInfo';
import MyProfile from './components/header/profile/MyProfile';



const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Login />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/profile' element={<MyProfile />} />



    </Routes>
  )
}

export default App
