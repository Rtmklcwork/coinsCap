import { Button, Space } from 'antd';

const LoginBtn = ({ handleClick }) => (
    <Space
        direction="vertical"
        style={{
            color: 'aqua'
        }}
    >
        <Button
            onClick={handleClick}

            type="primary" block>
            Login with Google account
        </Button>
    </Space>
)
export default LoginBtn;