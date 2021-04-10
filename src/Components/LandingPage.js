import React, { Component } from "react";
import "./landingpage.css";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class LandingPage extends Component {
  render() {
    return (

      
      <div className = "background">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <link rel="stylesheet" href="landingpage.css" />
              <h1> landing page </h1>
            <MDBCol md ="8"> bbb </MDBCol>
            </MDBCol>
            <MDBCol md="4">hellooooooooooooooooooooooooooooooooooooooooooooooooooo </MDBCol>
         </MDBRow>
        </MDBContainer>   
      </div>

    )
  }

}

export default LandingPage
