import React from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { StyledWrapper, StyledAvatar, StyledText } from '../../template/Main.template';
// import Button from '../button/button'
import ButtonIco from '../buttonIco/button.ico';
import heart from '../../assets/heart.svg';
import comment from '../../assets/comment.svg';

const Post = () => (
  <StyledWrapper>
    <Card style={{ width: '70vw' }}>
      <Card.Body>
        <Row>
          <Col xs={3} sm={2} md={1} lg={1}>
            <StyledAvatar>M</StyledAvatar>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <Card.Title>Mark Otto</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Post date</Card.Subtitle>
          </Col>
        </Row>

        <StyledText>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card
            content.
          </Card.Text>
        </StyledText>

        <ButtonIco ico={heart} />
        <ButtonIco ico={comment} />

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  </StyledWrapper>
);

export default Post;
