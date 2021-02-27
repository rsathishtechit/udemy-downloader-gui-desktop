import React from 'react';
import { Row, Col, Card, Input, Checkbox, Form, Select, Button } from 'antd';

const { Option } = Select;

class Settings extends React.Component {
  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <React.Fragment>
        <Card
          size="small"
          title="Download Settings"
          style={{ width: 1280, marginLeft: '1rem' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Download Path</h3>
              <Input />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Checkbox onChange={() => this.onChange}>
                Enable Download Start/End
              </Checkbox>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label>Download Start</label>
              <Form.Item name="Download Start">
                <Input placeholder="1" style={{ borderRadius: 4 }} />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <label>Download End </label>
              <Form.Item name="Download End">
                <Input
                  placeholder="2"
                  type="number"
                  style={{ borderRadius: 4 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Checkbox onChange={() => this.onChange}>
                Skip Attachments
              </Checkbox>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Video Quality</h3>
              <Select
                placeholder="Auto"
                allowClear
                style={{ width: '78rem' }}
                // onChange={this.handleNoOfBeds}
              >
                <Option value="1">Lowest</Option>
                <Option value="2">360p</Option>
                <Option value="3">480p</Option>
                <Option value="3">720p</Option>
                <Option value="3">1080p</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Checkbox onChange={() => this.onChange}>Skip Subtitles</Checkbox>
            </Col>
          </Row>
        </Card>
        <Card
          size="small"
          title="Application Settings"
          style={{ width: 1280, marginLeft: '1rem', marginTop: '1rem' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Language (Requires App Restart)</h3>
              <Select
                placeholder="English"
                allowClear
                style={{ width: '78rem' }}
              >
                <Option value="1">Lowest</Option>
                <Option value="2">Deutsch</Option>
                <Option value="3">Indonesia</Option>
                <Option value="3">Italian</Option>
                <Option value="3">Punjabi</Option>
              </Select>
            </Col>
          </Row>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <Button
              style={{
                marginLeft: '1rem',
                marginTop: '1rem',
                width: '80rem',
                backgroundColor: 'green',
                borderRadius: 5,
                color: 'white',
              }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Settings;
