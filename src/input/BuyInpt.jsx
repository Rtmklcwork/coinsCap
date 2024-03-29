import React from 'react';
import { Input } from 'antd';



const BuyInpt = ({ onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <Input
            onChange={handleChange}
            style={{ height: "200" }}
            type='number'
            allowClear='true'
            placeholder="Введите количество"
            defaultValue={'0'}
            min={0}
        />
    )
}

export default BuyInpt;