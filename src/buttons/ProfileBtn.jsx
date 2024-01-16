import React from 'react'
import { WalletOutlined } from '@ant-design/icons';
import s from './ProfileBtn.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProfileBtn = () => {
  const store = useSelector(state => state.wallet)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile')
  }

  return (
    <>
      <button className={s.wrapper}
        onClick={handleClick} >
        <WalletOutlined style={{
          fontSize: '40px',
          marginBottom: '10px'
        }} />
        {Number(store.totalPrice).toFixed(2)}$
      </button>
    </>
  )
}

export default ProfileBtn
