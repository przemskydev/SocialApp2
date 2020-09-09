import React, { createRef } from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { StyledWrapper, StyledAvatar, StyledText } from '../../template/Main.template';
import Button from '../button/button';
import StyledInput from '../input/input';
import ButtonIco from '../buttonIco/button.ico';
import heart from '../../assets/heart.svg';
import comment from '../../assets/comment.svg';

const Post = () => {
  const inputRef = createRef();

  return (
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

          {/* 
          ***
          Reported issue with Accordion and 'findDOMNode' on github 
          https://github.com/react-bootstrap/react-bootstrap/issues/5075#issuecomment-627991156
          ***
          */}
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1" style={{ cursor: 'pointer' }}>
                <div className="d-flex justify-content-end">Add comment!</div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <StyledInput
                    ref={inputRef}
                    id="post"
                    label="Write your comment"
                    placeholder="Stop hate!"
                  />
                  <Button share>ADD</Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Card border="light" style={{ marginTop: '3vh' }}>
            <Card.Body>
              <Row>
                <Col xs={3} sm={2} md={1} lg={1}>
                  <StyledAvatar>M</StyledAvatar>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                  <Card.Title>Mark Otto</Card.Title>
                </Col>
              </Row>
              <StyledText>
                <Card.Text>Some comment</Card.Text>
              </StyledText>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </StyledWrapper>
  );
};
export default Post;
