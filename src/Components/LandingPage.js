import React, { Component } from "react";
import "./landingpage.css";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import faraz from "./fk1.jpg";



class LandingPage extends Component {
  render() {
    return (
      <div className = "background">
       <Container>
  <Row>
    <div className = "profilebanner">
    <Col>
      <div className = 'profilepic'>
                <Image src={faraz} thumbnail/>
            </div>
    </Col>
    </div>
    <div className = "friendProfile1">
    <Col>Friend Profile 1</Col>
    </div>
  </Row>
  <Row>
    <div className = "profileinfo">
      <Col>
        Profile info
      </Col>
    </div>
    <div className = "friendProfile2">
    <Col>Friend Profile 2</Col>
    </div>
  </Row>
</Container>
      </div>   

    )
  }

}

export default LandingPage
