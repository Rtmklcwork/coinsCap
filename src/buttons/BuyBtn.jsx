import { Button, Space } from 'antd';

const BuyBtn = ({ handleClick }) => {

    return (
        <Space
            direction="vertical"
            style={{
                textAlign: 'center',
                width: '20%',
            }}
        >
            <Button onClick={handleClick}
                type="primary" block>
                Купить валюту
            </Button>
        </Space>
    )

}
export default BuyBtn;