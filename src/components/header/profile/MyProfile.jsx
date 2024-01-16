import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './MyProfile.module.css'
import { EyeOutlined } from '@ant-design/icons'
import LogoutBtn from '../../../buttons/LogoutBtn'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {
  const store = useSelector(state => state.wallet)
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <>
      <div className="btn">
        <Link to='/main'>
          <button className={style.btn} >
            To Main Page
          </button>
        </Link>
      </div>

      <div className={style.wrapper}>
        <button className={style.visible} onClick={() => setVisible(!visible)}><EyeOutlined /></button>
        <h2>My Coins:</h2>
        {visible == true ? store.items.map(i =>
          <h3>{i.id} {((i.priceUsd) * i.count).toFixed(2)} USD </h3>
        )
          :
          store.items.map(item =>
            <h3>{item.id} {'*******'}  USD </h3>
          )
        }
        <h2>Supply: </h2>
        {visible == true ?

          <h3>{(store.totalPrice).toFixed(2)} USD</h3>
          :
          <h3>*********** USD</h3>
        }
      </div>
      <div className={style.logout}>
        <LogoutBtn handleLogout={handleLogout} />
      </div>
    </>
  )
}

export default MyProfile
