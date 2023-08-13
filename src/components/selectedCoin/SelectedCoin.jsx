import React from 'react'
import { useSelector } from 'react-redux'

const SelectedCoin = () => {
  const selected = useSelector(state=> state.coins.selected)
  console.log(222,selected);
  
  return (
    <div>
      Selected Coin:
      {selected && selected.map(i => <h1>{i.id}</h1>)}
    </div>
  )
}

export default SelectedCoin
