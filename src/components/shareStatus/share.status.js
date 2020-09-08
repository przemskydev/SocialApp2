import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import StyledInput from '../input/input';
import { StyledAvatar } from '../../template/Main.template';

const ShareStatus = () => (
  <>
    <Card style={{ width: '85vw' }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={1}>
              <StyledAvatar>M</StyledAvatar>
            </Col>
            <Col>Mark Otto</Col>
            <Col xs={3} md={2} lg={1}>
              Profile?
            </Col>
          </Row>
        </Card.Title>
        <Card.Body>
          <StyledInput placeholder="Say hello" />
        </Card.Body>
        <div className="d-flex justify-content-between">
          <Button variant="secondary">FILE</Button>
          <Button variant="secondary">SHARE</Button>
        </div>
      </Card.Body>
    </Card>
  </>
);

export default ShareStatus;
