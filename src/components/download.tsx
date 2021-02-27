import React from 'react';
import { Divider, Comment, Tooltip, Avatar, Card } from 'antd';
import {
  DownloadOutlined,
  PauseOutlined,
  CaretRightOutlined,
  UserOutlined,
} from '@ant-design/icons';

const actions = [
  <Tooltip key="download" title="download">
    <span>
      <DownloadOutlined />
    </span>
  </Tooltip>,
  <Tooltip key="pause" title="pause">
    <span>
      <PauseOutlined />
    </span>
  </Tooltip>,
  <Tooltip key="stop" title="stop">
    <span>
      <CaretRightOutlined />
    </span>
  </Tooltip>,
];

function Downloads() {
  return (
    <React.Fragment>
      <Card
        size="small"
        title="Downloads"
        style={{ width: 1280, marginLeft: '1rem' }}
      >
        <Comment
          actions={actions}
          content={
            <h3>
              <b>Intro to React Native Build a cryptocurrency tracker app</b>
            </h3>
          }
          avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
        />
        <Divider />
        <Comment
          actions={actions}
          content={
            <h3>
              <b>Typescript with modern React(i.e.hooks, context, suspense)</b>
            </h3>
          }
          avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
        />
        <Divider />
        <Comment
          actions={actions}
          content={
            <h3>
              <b>Docker and Kubernetes:The Complete Guide</b>
            </h3>
          }
          avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
        />
        <Divider />
      </Card>
    </React.Fragment>
  );
}

export default Downloads;
