import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useUser } from '@/api/user/UserContext';
import { login } from '@/api/user/Api';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = async (formData) => {
  try {
    const response = await login(formData);
    if(response.length === 0){
      console.log('empyt')
    }else{
      setUserInfo(response)
    }
    // 处理登录成功后的逻辑，例如保存用户信息或跳转页面
  } catch (err) {
    console.error('Login failed:', err);
  }
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => {
  const { userInfo, setUserInfo } = useUser();

return (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    // wrapperCol={{ span: 16 }}
    style={{ maxWidth: 400 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder="Username"/>
    </Form.Item>

    <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder="Password"/>
    </Form.Item>
    
    <Form.Item>
      <Button type="primary" htmlType="submit" className="sign">
        SIGN IN
      </Button>
    </Form.Item>

    <Form.Item>
     <Flex justify="space-between">
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button color="default" variant="link">
          Forget
        </Button>
        <Button color="default" variant="link">
            Register
          </Button>
       </Flex>
    </Form.Item>
  </Form>
);
}
export default App;