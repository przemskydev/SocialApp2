import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { StyledWrapper, StyledAvatar } from '../../template/Main.template';
// import Button from '../button/button'
import ButtonIco from '../buttonIco/button.ico';
import heart from '../../assets/heart.svg';
import comment from '../../assets/comment.svg';

const Post = () => (
  <StyledWrapper>
    <Card style={{ width: '70vw' }}>
      <Card.Body>
        <Row>
          <Col xs={2} sm={1} md={1} lg={1}>
            <StyledAvatar>M</StyledAvatar>
          </Col>
          <Col>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          </Col>
        </Row>

        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card
          content.
        </Card.Text>

        <ButtonIco ico={heart} />
        <ButtonIco ico={comment} />
      </Card.Body>
    </Card>
  </StyledWrapper>
);

export default Post;
