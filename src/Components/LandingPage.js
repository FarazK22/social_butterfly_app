import React, { Component } from "react";
import "./landingpage.css";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import faraz from "./tokyobackground.jpg";
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
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookSquare, FaTwitter, } from "react-icons/fa"





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
                              ioasjodijadoj

                            </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>

                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={stephen} />
                          <Card.Body>
                            <Card.Title>Stephen Curry</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                            </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={alex} />
                          <Card.Body>
                            <Card.Title>Alexander Caruso</Card.Title>
                            <Card.Text>
                              This is a wider card with supporting text below as a natural lead-in to
                              additional content.
                        </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>
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
                              This is a wider card with supporting text below as a nat
                      </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={lebron} />
                          <Card.Body>
                            <Card.Title>Lebron James</Card.Title>
                            <Card.Text>
                              This card has supporting text below as a natural lead-in to additional
                              content.{' '}
                            </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>
                          <Card.Footer>
                            <a href="#" class="btn btn-primary">Add Friend</a>
                          </Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={zach} />
                          <Card.Body>
                            <Card.Title>Zach Lavine</Card.Title>
                            <Card.Text>
                              This is a wider
                        </Card.Text>
                          </Card.Body>
                            <div>
                              <AiFillInstagram />
                            </div>
                            <div>
                              <FaTwitter />
                            </div>
                            <div>
                              <FaFacebookSquare />
                            </div>
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
