import React from 'react'

const LogoutBtn = ({ handleLogout }) => {

    return (
        <button onClick={ handleLogout } >
            logout
        </button>
    )
}

export default LogoutBtn
