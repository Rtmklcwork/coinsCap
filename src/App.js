import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import MyProfile from './components/header/profile/MyProfile';
import SelectedCoin from './components/selectedCoin/SelectedCoin';
import Header from './components/header/Header'
import MainPage from './components/coinsInfo/MainPage';



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/selected' element={<SelectedCoin />} />
      </Routes>
    </>
  )
}

export default App
