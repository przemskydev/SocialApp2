import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import StyledInput from '../input/input';

const ShareStatus = () => (
  <>
    <Card style={{ width: '60rem' }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={1}>M</Col>
            <Col xs={9}>Mark Otto</Col>
            <Col xs={2}>Profile?</Col>
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
