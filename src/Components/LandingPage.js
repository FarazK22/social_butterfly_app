import React, { Component } from "react";
import "./landingpage.css";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import faraz from "./fk1.jpg";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



class LandingPage extends Component {
  render() {
    return (
      <div className="background">
        <Container>
          <Row>
            <div className="profilebanner">
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={faraz} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
            <div className="friendProfile1">
              <Col>Friend Profile 1</Col>
            </div>
          </Row>
          <Row>
            <div className="profileinfo">
              <Col>
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
              </Col>
            </div>
            <div className="friendProfile2">
              <Col>Friend Profile 2</Col>
            </div>
          </Row>
        </Container>
      </div>

    )
  }

}

export default LandingPage
