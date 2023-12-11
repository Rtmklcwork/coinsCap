import React from 'react'
import { useState } from 'react';

const ModalInpt = () => {
    const [value, setValue] = useState()
    console.log(value);
    const handleUnputChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    return (
        <div>
            <input
                placeholder='введите количество...'
                onChange={handleUnputChange}
                value={value}
            />
        </div>
    )
}

export default ModalInpt

