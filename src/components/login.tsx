import React from 'react';
// import './login.scss';
import { Form, Button, Layout, Divider, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ipcRenderer as ipc } from 'electron';
import axios from 'axios';

const { Content } = Layout;

class Login extends React.Component {
  state = { isBusiness: false, businessName: '', errorMessage: '' };

  toggleDisplay = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({
      isBusiness: !this.state.isBusiness,
    });
  };

  setBusinessName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ businessName: e.target.value }, () =>
      console.log(this.state.businessName)
    );

  onFinish = (): void => {
    const subDomain = this.state.businessName ? this.state.businessName : 'www';
    console.log(`https://${subDomain}.udemy.com/join/login-popup`);
    const response = ipc.sendSync(
      'login',
      `https://${subDomain}.udemy.com/join/login-popup`
    );
    axios
      .get(
        `https://${subDomain}.udemy.com/api-2.0/users/me/subscribed-courses/`,
        {
          headers: { Authorization: `Bearer ${response}` },
        }
      )
      .then((response) => {
        // If request is good...
        console.log(response);
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  };

  render(): JSX.Element {
    const { isBusiness, businessName } = this.state;
    return (
      <Content className="body-layout">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={() => this.onFinish()}
        >
          <div style={{ textAlign: 'center', fontSize: '3rem' }}>
            <UserOutlined />
          </div>
          <div>
            <h2 style={{ textAlign: 'center' }}>Udemy Login</h2>
          </div>
          <Form.Item>
            <Button
              htmlType="submit"
              className="login-form-button"
              onClick={this.toggleDisplay}
            >
              Udemy Business ?
            </Button>
            {isBusiness && (
              <Input
                style={{ marginTop: 10 }}
                placeholder="Udemy Business Name"
                value={businessName}
                onChange={this.setBusinessName}
              />
            )}
          </Form.Item>

          <Divider plain>CHOOSE LOGIN METHOD</Divider>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login Using Credentials
            </Button>
          </Form.Item>
        </Form>
      </Content>
    );
  }
}

export default Login;
