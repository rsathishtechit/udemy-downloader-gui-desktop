import React from 'react';
import { Input, Divider, Row, Col, Comment, Tooltip, Avatar } from 'antd';

import {
  DownloadOutlined,
  PauseOutlined,
  CaretRightOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

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

function Course() {
  return (
    <React.Fragment>
      <Row>
        <Col style={{ marginLeft: '1rem' }}>
          <Search
            placeholder="Search Courses"
            allowClear
            onSearch={onSearch}
            style={{ width: 1200 }}
          />
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
                <b>
                  Typescript with modern React(i.e.hooks, context, suspense)
                </b>
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
          <Comment
            actions={actions}
            content={
              <h3>
                <b>The Modern Python 3 Bootcamp</b>
              </h3>
            }
            avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Course;
