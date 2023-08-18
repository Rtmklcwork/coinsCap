import React from 'react'
import { useSelector } from 'react-redux'
import BuyInpt from '../../input/BuyInpt';
import BuyBtn from '../../buttons/BuyBtn';
import SelectedCoinsTable from './SelectedCoinsTable'

const SelectedCoin = () => {
  const selected = useSelector(state => state.coins.selected)
  console.log(222, selected);

  return (
    <>

      <div>
        {selected && selected.map(i =>
          <div>
            <h1>{i.symbol}</h1>
            <h1>{i.id}</h1>
          </div>
        )}
      </div>
      <div>
        <div style={{ width: "200px" }}>
          <BuyInpt />
        </div>
        <div style={{ width: "auto", margin: "20px", padding: '0px' }}>
          <BuyBtn />
        </div>
      </div>
      <div>

</div>
<SelectedCoinsTable/>
    </>
  )
}

export default SelectedCoin
