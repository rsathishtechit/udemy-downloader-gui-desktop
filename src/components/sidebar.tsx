import React from 'react';
import { Menu, Col, Row, } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import {
  YoutubeOutlined,
  UserOutlined,
  DownloadOutlined,
  SettingOutlined,
  AlertOutlined,
} from '@ant-design/icons';

import Course from './course';
import Downloads from './download';
import Settings from './settings';
import About from './about';

function Sidebar(): JSX.Element {
  return (
    <React.Fragment>
      <Row>
        <Col span={2}>
      <Menu style={{ width: 130, minHeight: '100vh', position: 'fixed' }}>
        <Menu.Item key="1" icon={<YoutubeOutlined />}>
          <Link to="/course" style={{}}>
            Courses
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DownloadOutlined />}>
          <Link to="/downloads">Downloads</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AlertOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
        </Col>
        <Col span={22}>
          <Switch>
            <Route path="/course" component={Course} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" component={About} />
          </Switch>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Sidebar;
