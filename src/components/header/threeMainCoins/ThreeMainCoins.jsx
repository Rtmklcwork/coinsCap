import React from 'react';
import { useSelector } from 'react-redux';




const ThreeMainCoins = () => {
  let coins = useSelector(state => state.coins.coins.data)
  return (
    <div>
      Популярные криптовалюты:
      {coins && coins.filter((_,index)=>index <3).map(item=> <p>{item.id}: {item.supply}$</p>)}
    </div>
  )
}

export default ThreeMainCoins
