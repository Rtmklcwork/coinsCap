import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const store = useSelector(state => state.wallet)
  const selected = useSelector(state => state.coins.selected)
  console.log('selected', selected);
  console.log('store', store);

  return (
    <div>
      <h3>Мои монеты:</h3>
      {store ? store.items.map(i =>
        <h4>{i.id} {i.priceUsd * i.count} USD</h4>
      )
        :
        '!!!'}
      <h3>Общая сумма моих денюжков : </h3>
      <h4>{store.totalPrice} USD</h4>
    </div>
  )
}

export default MyProfile
