import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import SocialFollow from "./Socialfollow";
import { Container, Row, Col, Button } from "react-bootstrap";
import SignIn from "./MutlistepForm/images/signin.png";
import "./style.css"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      Username: "",
      Password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      Username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      var user=this.state.Username;
      var pass=this.state.Password;
      alert(user,pass)

      AuthService.login(user,pass).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
    
      <Container className="Main d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">
      <Row>
      <Col lg={6} md={6} sm={12} className="text-center pt-4">
        <h1 className=" heading text-center fw-bolder" style={{fontColor:"#4481eb"}}>LOGIN</h1>
         <Form onSubmit={this.handleLogin}
         ref={c => {
          this.form = c;
        }}          >
              <div className="form-group">
              <Input
              type="text"
              className="form-control"
              name="Username"
              Placeholder="Username"
              value={this.state.Username}
                onChange={this.onChangeUsername}
              validations={[required]}
            />
              </div>
              <div className="form-group">
              <Input
              type="Password"
              className="form-control"
              name="Password"
              Placeholder="Password"
              value={this.state.Password}
              onChange={this.onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="form-group align-center">
          <button className="btn btn-primary btn-block"
           disabled={this.state.loading}>
           {this.state.loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
            <span>Login</span>
          </button>
        </div>
        {this.state.message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
          </div>
        )}
          <CheckButton style={{ display: "none" }} 
          ref={c => {
            this.checkBtn = c;
          }} 
          />
          <div className="text-center mt-1 mb-1">
          <Link to={"/register"} className="nav-link">
          <small className="reset mr-3">
            New User ?</small>
          </Link>
            </div>
         
            <div className="SocialMedia">
            <SocialFollow/>
            </div>

        </Form>
      </Col>
      <Col lg={6} md={6} sm={12} className="Imgclass" style={{backgroundColor:"#4481eb"}}>
       
      <img className="w-100 p-3" src={SignIn} alt="icon"/>
      <h6 className="text-center mt-2">Welcome to Aksesso<br/>
      Bright Future is waiting for you.  
      </h6>
      </Col>
      </Row>
    </Container>
    );
  }
}
