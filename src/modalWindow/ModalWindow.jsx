import React from 'react'
import './ModalWindow.css'
import ModalInpt from '../input/ModalInpt'
import BuyBtn from '../buttons/BuyBtn'
import { useDispatch } from 'react-redux'

const ModalWindow = ({ active, setActive, children }) => {
    const dispatch = useDispatch()
    const handleInputChange = (e) => {
        dispatch(e.targer.value)
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
                {children}
                <div>
                    <ModalInpt handleInputChange={handleInputChange} />
                    <BuyBtn />
                </div>
            </div>

        </div>
    )
}

export default ModalWindow
