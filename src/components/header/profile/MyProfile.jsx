import React from 'react'
import s from './MyProfile.module.css'
import {WalletOutlined } from '@ant-design/icons';

const MyProfile = () => {
  return (
    <div className={s.wrapper}>
      <button>
      <WalletOutlined />
      </button>
    
    </div>
  )
}

export default MyProfile
