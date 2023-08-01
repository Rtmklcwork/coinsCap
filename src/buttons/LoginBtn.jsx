import { Button, Space } from 'antd';

const LoginBtn = ({ handleClick }) => (
    <Space
        direction="vertical"
        style={{
            textAlign: 'center',
            width: '20%',
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