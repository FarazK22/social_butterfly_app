import React, { Component } from "react";
import "./landingpage.css";
import { Helmet } from "react-helmet";

class LandingPage extends Component {
  render() {
    return (
      <div className="login container">
        <Helmet>
          <link rel="stylesheet" href="landingpage.css" />
        </Helmet>
        <h1> landing page </h1>
        <p> hello world </p>
      </div>


    )
  }

}

export default LandingPage
