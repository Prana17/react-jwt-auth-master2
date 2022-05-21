import { Container, Row, Col, Button } from "react-bootstrap";
import SignUp from "../images/signup.png";
import Logo from "../images/avatar.png";
import "../components/style.css";
import SocialFollow from "./Socialfollow";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';``



const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
  const Regi = () => {
    const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
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
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, password))
        .then(() => {
          setSuccessful(true);
          toast.success('successful')

          
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  return (
    <Container className="Main  w-75 d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">

      <Row className="">

      <Col lg={6} md={6} sm={12} className="Imgclass" style={{backgroundColor:"#4481eb"}}>
       
        <img className="w-100 p-3" src={SignUp} alt="icon"/>
        <h6 className="text-center mt-2">Welcome to Aksesso<br/>
        Bright Future is waiting for you.  
        </h6>
        </Col>

        <Col lg={6} md={6} sm={12} className="text-center pt-4">
        <h1 className=" heading text-center fw-bolder" style={{fontColor:"#4481eb"}}>SIGN UP</h1>


      
          <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
    
      </Row>
    </Container>
  );
};

export default Regi;
