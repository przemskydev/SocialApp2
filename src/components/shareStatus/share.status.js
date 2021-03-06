import React, { useRef } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import StyledInput from '../input/input';
import Button from '../button/button';
import { StyledAvatar } from '../../template/Main.template';

const ShareStatus = () => {
  const inputRef = useRef();
  return (
    <>
      <Card style={{ width: '85vw' }}>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col xs={2} sm={1} md={1} lg={1}>
                <StyledAvatar>M</StyledAvatar>
              </Col>
              <Col className="d-flex align-items-center">Mark Otto</Col>
              <Col xs={3} md={2} lg={1} className="d-flex justify-content-end">
                Profile?
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <StyledInput ref={inputRef} id="name" label="Say hello" placeholder="Add new status" />
          </Card.Body>
          <div className="d-flex justify-content-between">
            <Button share>FILE</Button>
            <Button share>SHARE</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ShareStatus;
