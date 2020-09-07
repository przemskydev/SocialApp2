import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ShareStatus = () => (
  <>
    <Card style={{ width: '60rem' }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={1}>M</Col>
            <Col xs={9}>Mark Otto</Col>
            <Col xs={2}>Profile</Col>
          </Row>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card
          content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="secondary">FILE</Button>
          <Button variant="secondary">SHARE</Button>
        </div>
      </Card.Body>
    </Card>
  </>
);

export default ShareStatus;
