import React, { useEffect } from 'react'
import LogoutBtn from '../../buttons/LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../slices/userSlice'
import CoinsTable from '../../coinsTable/CoinsTable'
import { useGetCoinsQuery } from '../coins/Coins'
import { coinsData } from '../../slices/coinsSlice'
import Header from '../header/Header'


const MainPage = () => {
  const { data, error, isLoading } = useGetCoinsQuery()
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
      <Header/>
      <CoinsTable />
      <LogoutBtn handleLogout={handleLogout} />
    </>

  )
}

export default MainPage
