import { Container, Row, Col, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

import signIn from "../images/signin.png";
import Logo from "../images/avatar.png";
import SocialFollow from "./Socialfollow";
import Alert from 'react-bootstrap/Alert';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import "../components/style.css"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;




const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <Container className="Main  w-75 d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">
      <Row>
      <Col lg={6} md={6} sm={12} className="text-center pt-4">
        <h1 className=" heading text-center fw-bolder" style={{fontColor:"#4481eb"}}>Login</h1>
         <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
              <Input
              type="text"
              className="form-control"
              name="username"
              Placeholder="Username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
              </div>
              <div className="form-group">
              <Input
              type="password"
              className="form-control"
              name="password"
              Placeholder="Password"

              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="form-group align-center">
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
        </div>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <div className="text-center mt-1 mb-1">
            <a href="#"><small className="reset mr-3">New User ?</small></a>II
            <a href="#"><small className="reset ml-3">Forget Password</small></a>
            </div>
         
            <div className="SocialMedia">
            <SocialFollow/>
            </div>

        </Form>
      </Col>
      <Col lg={6} md={6} sm={12} className="Imgclass" style={{backgroundColor:"#4481eb"}}>
       
      <img className="w-100 p-3" src={signIn} alt="icon"/>
      <h6 className="text-center mt-2">Welcome to Aksesso<br/>
      Bright Future is waiting for you.  
      </h6>
      </Col>
      </Row>
    </Container>
  );
};

export default Login;
