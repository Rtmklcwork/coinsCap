import React from 'react'
import style from './LogoutBtn.module.css'

const LogoutBtn = ({ handleLogout }) => {

    return (
        <button
            className={style.wrapper}
            onClick={handleLogout} >
            Logout
        </button>
    )
}

export default LogoutBtn
