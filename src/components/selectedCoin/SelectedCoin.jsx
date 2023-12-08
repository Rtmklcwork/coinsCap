import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BuyInpt from '../../input/BuyInpt';
import BuyBtn from '../../buttons/BuyBtn';
import SelectedCoinsTable from './SelectedCoinsTable'
import { useDispatch } from 'react-redux';
import { getCoinInWallet } from '../../slices/coinsSlice';

const SelectedCoin = () => {
  const selected = useSelector(state => state.coins.selected)
  console.log('SELECTEDCOIN', selected)
  const dispatch = useDispatch()
  const [value, setValue] = useState(null)


  const handleChange = (value) => {
    setValue(+value)
  }

  const handleClick = () => {


    dispatch(getCoinInWallet(selected))
  }


  return (
    <>
      <div>
        <h1>{selected.id}</h1>
        <h1>{selected.symbol}</h1>
      </div>
      {/* 
      <div>
        {selected && selected.map(i =>
          <div>
            <h1>{i.symbol}</h1>
            <h1>{i.id}</h1>
          </div>
        )}
      </div> */}
      <div>
        <div style={{ width: "200px" }}>
          <BuyInpt onChange={handleChange} />
        </div>
        <div style={{ width: "auto", margin: "20px", padding: '0px' }}>
          <BuyBtn handleClick={handleClick} value={value} />
        </div>
      </div>
      <div>

      </div>
      <SelectedCoinsTable />

    </>
  )
}

export default SelectedCoin
