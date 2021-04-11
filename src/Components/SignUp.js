import React, { Component } from "react";
import {Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'



class SignUp extends Component {
    render() {
        return (
          <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="twitter" className="form-control" placeholder="Enter twitter link" />
                    </div>


                    <div className="form-group">
                        <label>Facebook</label>
                        <input type="facebook" className="form-control" placeholder="Enter facebook link" />
                    </div>

                    <div className="form-group">
                        <label>Instagram</label>
                        <input type="instagram" className="form-control" placeholder="Enter instagram link" />
                    </div>

                    <div className="form-group">
                    <label>Upload profile picture</label>
                    <Form>
                      <Form.File
                        id="custom-file"
                        label="Custom file input"
                        custom
                      />
                    </Form>
                    </div>
                    <div className="form-group">
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Sports"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Music"
                      />
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Travel"
                      />

                    </Form>

                    </div>
                    <Link to="/landing-page" className="btn btn-primary">Sign Up</Link>
                </form>
              </div>
            </div>
        );
    }
}

export default SignUp;
