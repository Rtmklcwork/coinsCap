import React from 'react'
import { Link } from 'react-router-dom'
import ThreeMainCoins from './threeMainCoins/ThreeMainCoins'
import ProfileBtn from '../../buttons/ProfileBtn'
import style from './Header.module.css'
import logo from '../../assets/logo.png'


const Header = () => {

  return (
    <>
      <div className={style.text}>
        <Link to='/main'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={style.wrapper}>
        <div>
          <ThreeMainCoins />
        </div>

        <div>
          <ProfileBtn />
        </div>
      </div >
    </>
  )
}

export default Header
