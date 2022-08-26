import React, { useState } from "react";
import "./style2.css";
import validator from "validator";
import axios from "axios";

import SignIn from "../images/Regi2.png";
import Student from "../images/Student.svg"
import FileUploaded from "../components/FileUploader"
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap"
import axiosInstance from "./axios" 

const FiveStep = ({ nextStep,prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false)

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3000/upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };


  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.resume) 
    ) {
      setError(true);
    } else {
      nextStep();
    }
    console.log(e);
  };



  return (
    <div>
    <Container className="Main d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">
    <Row>
    <Col lg={6} md={6} sm={12} className="text-center pt-4">
    <img src={Student} className="img-fluid" alt="Sample image" />
    
    <form className="mx-1 mx-md-4" onSubmit={submitFormData}>

      <div className="d-flex flex-row align-items-center mb-2">
        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
        <div className="form-outline flex-fill mb-0">
        <input type="file" 
        className="form-control"
        style={{
          borderBottom: error ? "1px solid red" : "",
        }}
        name="Resume"
        defaultValue={values.resume}
        onChange={handleFormData("resume")}
         placeholder="resume"/>
        <button onClick={uploadFile}>Upload</button>
        </div>
      </div>
     
     
      <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
        <button variant="primary" className="btn btn-primary btn-lg" type="submit">Continue
      </button>                 
         </div>
    </form>
    </Col>
    <Col lg={6} md={6} sm={12} className="Imgclass">
     
    <img className="w-100 p-3" src={SignIn} alt="icon"/>
    <h6 className="text-center mt-2">Welcome to Aksesso<br/>
    Bright Future is waiting for you.  
    </h6>
    </Col>
    </Row>
  </Container>
    </div>
  );
};

export default FiveStep
