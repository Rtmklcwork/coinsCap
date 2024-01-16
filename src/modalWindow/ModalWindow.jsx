import React, { useState } from 'react'
import './ModalWindow.css'
// import ModalInpt from '../input/ModalInpt'
import BuyBtn from '../buttons/BuyBtn'
import { useDispatch, useSelector } from 'react-redux'
import BuyInpt from '../input/BuyInpt'
import { addCoin } from '../slices/walletSlice'

const ModalWindow = ({ active, setActive, children }) => {

    const store = useSelector(state => state.coins.selected);
    const dispatch = useDispatch()
    const [value, setValue] = useState(null)

    const handleClick = () => {
        dispatch(addCoin({
            ...store,
            count: value
        }))
        setActive(false)
        alert(`Вы купили:${value} ${store.symbol} на сумму: ${store.priceUsd * value}USD`)
    }
    const handleChange = (value) => {
        setValue(+value)
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className='content'>
                    {store.symbol}
                    -
                    {store.name}
                </div>
                <div className='content'>
                    <BuyInpt onChange={handleChange} />
                </div>
                <div className='content'>
                    <BuyBtn handleClick={handleClick} />
                </div>
            </div>

        </div>
    )
}

export default ModalWindow
