import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
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
      </Card.Body>
    </Card>
  </StyledWrapper>
);

export default Post;
