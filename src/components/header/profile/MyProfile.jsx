import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const store = useSelector(state => state.coins.wallet)
  console.log('store', store);

  return (
    <div>
      <h1>Номинал моих монет в долларах АСАШАЙ :</h1>
      {store ? store.flat().map(i =>
        <h1>{i.id} {i.priceUsd}</h1>
      )
        :
        '!!!'}
      <h1>Общая сумма моих денюжков : </h1>
      {/* {store ?? store.flat().reduce((acc, i) => <h1>{acc + i.priceUsd}</h1>)} */}
    </div>
  )
}

export default MyProfile
