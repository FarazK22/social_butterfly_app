import React, { Component } from "react";
import "./landingpage.css";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import faraz from "./JACKIE.jpg";

import zion from "./ZION.jpg";
import kyle from "./GOAT.jpg";
import zach from "./LAVINE.jpeg";
import lebron from "./LEBRON.jpg";
import alex from "./MAMBA.png";
import stephen from "./STEPH.jpg";

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/Card'




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
                    font= ''
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Header>Your friends</Card.Header>
                    <Card.Body>
                      <Card.Text>
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
                          <Card.Img variant="top" src={zion} />
                          <Card.Body>
                            <Card.Title>Zion Williamson</Card.Title>
                            <Card.Text>
                              Zion is interested in Music and Travelling
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem>Facebook</ListGroupItem>
                            <ListGroupItem>Instagram</ListGroupItem>
                            <ListGroupItem>Twitter</ListGroupItem>
                          </ListGroup>

                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={stephen} />
                          <Card.Body>
                            <Card.Title>Stephen Curry</Card.Title>
                            <Card.Text>
                             Stephen is interested in Sports
                            </Card.Text>
                          </Card.Body>
                          <ListGroupItem>Facebook</ListGroupItem>
                            <ListGroupItem>Instagram</ListGroupItem>
                            <ListGroupItem>Twitter</ListGroupItem>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={alex} />
                          <Card.Body>
                            <Card.Title>Alexander Caruso</Card.Title>
                            <Card.Text>
                              Alex is interested in Travelling
                        </Card.Text>
                          </Card.Body>

                            <ListGroupItem>Facebook</ListGroupItem>
                            <ListGroupItem>Instagram</ListGroupItem>
                            <ListGroupItem>Twitter</ListGroupItem>
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
                          <Card.Img variant="top" src={kyle} />
                          <Card.Body>
                            <Card.Title>Kyle Lowry</Card.Title>
                            <Card.Text>
                              Kyle is interested in Music and Sports
                      </Card.Text>
                          </Card.Body>
                          <ListGroupItem>Facebook</ListGroupItem>
                            <ListGroupItem>Instagram</ListGroupItem>
                            <ListGroupItem>Twitter</ListGroupItem>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={lebron} />
                          <Card.Body>
                            <Card.Title>Lebron James</Card.Title>
                            <Card.Text>
                              Lebron is interested in Music, Sports, and Travelling
                            </Card.Text>
                          </Card.Body>
                          <ListGroupItem>Facebook</ListGroupItem>
                            <ListGroupItem>Instagram</ListGroupItem>
                            <ListGroupItem>Twitter</ListGroupItem>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={zach} />
                          <Card.Body>
                            <Card.Title>Zach Lavine</Card.Title>
                            <Card.Text>
                              Zach is interested in Travelling and Music
                        </Card.Text>
                          </Card.Body>
                          <ListGroupItem>Facebook</ListGroupItem>
                          <ListGroupItem>Instagram</ListGroupItem>
                          <ListGroupItem>Twitter</ListGroupItem>
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

export default LandingPage;
