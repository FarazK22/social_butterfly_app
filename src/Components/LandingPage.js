import React, { Component } from "react";
import "./landingpage.css";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import faraz from "./tokyobackground.jpg";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'



class LandingPage extends Component {
  render() {
    return (
      <div className="background">
        <Container>
          <div className="profilebanner">
            <Container>
              <Row>
                <Col>
                  <div className='profilepic'>
                    <Image src={faraz} thumbnail />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className= 'profileinfo'>
                  <Card
                    bg='dark'
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Header>Your friends</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Add friends names here
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="friendbanner">
            <Container>
              <Row>
                <Col>
                  <div className="friendProfile1">
                    <Col>
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
              </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to
                              show that equal height action.
              </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                      </CardDeck>
                    </Col>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="friendProfile2">
                    <Col>
                      <CardDeck>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.
                      </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={faraz} />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content. This card has even longer content than the first to
                              show that equal height action.
                      </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                      </CardDeck>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Container>

          </div>
        </Container>
      </div>

    )
  }

}

export default LandingPage