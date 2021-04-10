import React, { Component } from "react";
import "./landingpage.css";
import { Helmet } from "react-helmet";
import { Flex, Box } from 'reflexbox'

class LandingPage extends Component {
  render() {
    return (
      <div className = "background">
        <Flex p={2} align='center'>
          <Box px={2} height = {1/2}>
            <Helmet>
              <link rel="stylesheet" href="landingpage.css" />
            </Helmet>
            <h1> landing page </h1>
          </Box>
          <Box px={2} height={1/3}>
              <p> hello world </p>
          </Box>
          <Box px={2} height= {1/4}>
            <p> gelo </p>
          </Box>
        </Flex>
      </div>

    )
  }

}

export default LandingPage
