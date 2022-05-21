import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import SocialFollow from "./Socialfollow";
import { Container, Row, Col, Button } from "react-bootstrap";
import SignUp from "../images/signup.png";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import "./style.css"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      successful: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  render() {
    return (
      <Container className="Main d-flex justify-content-center p-5 shadow-lg  align-item-center">

      <Row className="">

      <Col lg={6} md={6} sm={12} className="Imgclass" style={{backgroundColor:"#4481eb"}}>
       
        <img className="w-100 p-3" src={SignUp} alt="icon"/>
        <h6 className="text-center mt-2">Welcome to Aksesso<br/>
        Bright Future is waiting for you.  
        </h6>
        </Col>

        <Col lg={6} md={6} sm={12} className="text-center pt-4">
        <h1 className=" heading text-center fw-bolder" style={{fontColor:"#4481eb"}}>SIGN UP</h1>


      
          <Form onSubmit={this.handleRegister} ref={c =>{
            this.form = c;
          }}>
          {!this.state.successful && (
            <div>
              <div className="form-group">
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
             
              <div className="form-group">
                <button className="btn  my-3 btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {this.state.message && (
            <div className="form-group">
              <div className={ this.state.successful
                ? "alert alert-success"
                : "alert alert-danger" 
              }
               role="alert">  
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton 
          style={{ display: "none" }}
          ref={c => {
            this.checkBtn = c;
          }} />
          <div className="text-center mt-1 mb-1">
            <a href="#"><small className="reset mr-3">Already User ?</small></a>II
            <a href="#"><small className="reset ml-3">Forget Password</small></a>
            </div>
         
            <div className="SocialMedia">
            <SocialFollow/>
            </div>

        </Form>
      </Col>
    
      </Row>
    </Container>
    );
  }
}