import React, { Component } from "react";
import {Link } from "react-router-dom";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "./login.css"


export default class Login extends Component {
    render() {
        return (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form>
                  <h3>Sign In</h3>

                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" />
                  </div>

                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                  </div>

                    <Link to="/landing-page" className="btn btn-primary">Submit</Link>

                  <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
              </form>
            </div>
          <div className = "welcomeBox">
          <Card>
           <Card.Body>
            Socia-fy is meant to connect you with friends nearby you with similar interests. Begin by creating an account and filling out your interests. Next, you'll see other users near you and ways you can connect to them!
           </Card.Body>
          </Card>
          </div>
          </div>

        );
    }
}
