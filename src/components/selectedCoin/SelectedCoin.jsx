import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BuyInpt from '../../input/BuyInpt';
import BuyBtn from '../../buttons/BuyBtn';
import SelectedCoinsTable from './SelectedCoinsTable'
import { useDispatch } from 'react-redux';
import { addCoin } from '../../slices/walletSlice';
import Header from '../header/Header';
import style from './SelectedCoin.module.css'


const SelectedCoin = () => {
  const selected = useSelector(state => state.coins.selected)
  console.log('SELECTEDCOIN', selected)
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)
  const handleChange = (value) => {
    setValue(+value)
  }
  const handleClick = () => {
    dispatch(addCoin({
      ...selected,
      count: value
    }))
  }
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.coin}>
          <h1>{selected.id}</h1>
          <h1>{selected.symbol}</h1>
        </div>
        <div className={style.input}>
          <BuyInpt onChange={handleChange} />
        </div>
        <div className={style.btn}>
          <BuyBtn handleClick={handleClick} value={value} />
        </div>
      </div>

      <div>
        <SelectedCoinsTable />
      </div>
    </>
  )
}

export default SelectedCoin
