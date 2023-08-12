import React from 'react'
import {WalletOutlined } from '@ant-design/icons';
import s from './ProfileBtn.module.css'
import { useNavigate } from 'react-router-dom';

const ProfileBtn = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/profile')
    }

  return (
   <button className={s.wrapper}
   onClick={handleClick} >
    <WalletOutlined />
   </button>
  )
}

export default ProfileBtn
