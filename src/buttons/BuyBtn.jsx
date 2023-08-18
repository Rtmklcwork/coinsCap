import { Button, Space } from 'antd';

const BuyBtn = () => (
    <Space
        direction="vertical"
        style={{
            textAlign: 'center',
            width: '20%',
        }}
    >
        <Button
            type="primary" block>
            Купить валюту
        </Button>
    </Space>
)
export default BuyBtn;