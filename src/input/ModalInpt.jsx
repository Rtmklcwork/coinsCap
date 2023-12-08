import React from 'react'

const ModalInpt = ({ handleUnputChange }) => {
    return (
        <div>
            <input
                placeholder='введите количество...'
                onChange={handleUnputChange}
            />
        </div>
    )
}

export default ModalInpt

