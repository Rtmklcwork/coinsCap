import React, { useEffect, useState } from 'react'
import LogoutBtn from '../../buttons/LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../slices/userSlice'
import CoinsTable from '../coinsTable/CoinsTable'
import Header from '../header/Header'
import { useGetCoinsQuery } from '../coins/Coins'
import { coinsData } from '../../slices/coinsSlice'
import ModalWindow from '../../modalWindow/ModalWindow'


const MainPage = () => {
  const { data } = useGetCoinsQuery()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(removeUser())
    navigate('/login')
  }

  useEffect(() => {
    dispatch(coinsData(data))
  }, [data])
  return (
    <>
      <Header />
      <CoinsTable />
      <LogoutBtn handleLogout={handleLogout} />
    </>

  )
}

export default MainPage
