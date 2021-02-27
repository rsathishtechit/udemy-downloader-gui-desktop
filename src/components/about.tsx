import React from 'react';
import { Card, Row, Col, Button, Comment, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
  FileTextOutlined,
  GithubOutlined,
  DribbbleSquareOutlined,
} from '@ant-design/icons';

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card size="small" style={{ width: 1280, marginLeft: '1rem' }}>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <FileTextOutlined
                style={{ marginLeft: '36rem', fontSize: '3rem' }}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <div style={{ marginLeft: '36rem' }}>Udeler v1.7.0</div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Button
                style={{
                  marginTop: '1rem',
                  width: '78rem',
                  borderRadius: 5,
                }}
              >
                Check for updates
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Links</h3>
            </Col>
            <Comment
              author={<a>FaisalUmair/udemy-downloader-gui</a>}
              avatar={<GithubOutlined />}
              content={<p>Repository</p>}
            />
            <Divider style={{ marginTop: '-0.5rem' }} />
            <Comment
              style={{ marginTop: '-0.8rem' }}
              author={<a>FaisalUmair</a>}
              avatar={<GithubOutlined />}
              content={<p>Devloper</p>}
            />
            <Divider style={{ marginTop: '-0.5rem' }} />
            <Comment
              style={{ marginTop: '-0.8rem' }}
              author={<a>thewebartisans.net</a>}
              avatar={<DribbbleSquareOutlined />}
              content={<p>Website</p>}
            />
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Development</h3>
            </Col>
            <Comment
              author={<Link to={''}>udemy-downloader-gui/issues</Link>}
              avatar={<GithubOutlined />}
              content={<p>Report Bug</p>}
            />
            <Divider style={{ marginTop: '-0.5rem' }} />
            <Comment
              style={{ marginTop: '-0.8rem' }}
              author={<a>udemy-downloader-gui/pulls</a>}
              avatar={<GithubOutlined />}
              content={<p>Contribute</p>}
            />
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <h3>Donate</h3>
              <p>
                Udeler is free and without any ads. if you appreciate that,
                please consider donating to the Developer.
              </p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }}>
              <Button shape="round" style={{ marginLeft: '36rem' }}>
                Donate
              </Button>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default About;
