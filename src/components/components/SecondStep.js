import React, { useState } from "react";
import { Form, Card, Button, Row, Container, Col} from "react-bootstrap";
import validator from "validator";
import SignIn from "../images/Regi2.png";
import Student from "../images/Student.svg"

import "./style2.css";

// creating functional component ans getting props from app.js and destucturing them
const SecondStep= ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
 // after form submit validating the form data using validator
 const submitFormData = (e) => {
  e.preventDefault();
  console.log(e);

  // checking if value of first name and last name is empty show error else take to step 2
  if (
    validator.isEmpty(values.posttal_address) ||
    validator.isEmpty(values.pinCode) 
    ) 

   {
    setError(true);
  } else {
    nextStep();
  }
  console.log(e)
};
 
  return (
    <>
    <Container className="Main d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">
    <Row>
    <Col lg={6} md={6} sm={12} className="text-center pt-4">
    <img src={Student} className="img-fluid" alt="Sample image" />
    
      <form className="mx-1 mx-md-4" onSubmit={submitFormData} >
      <div className="d-flex flex-row align-items-center mb-2">
        <i className="fas fa-user fa-lg me-3 fa-fw" />
        <div className="form-outline flex-fill mb-0">
          <input className="form-control"
          style={{ borderBottom: error ? "1px solid red" : "" }}
          name="posttal_address"
          defaultValue={values.posttal_address}
          type="text"
          placeholder="Postal address"
          onChange={handleFormData("posttal_address")}                      />
        {error ? (
          <div className="form-text" style={{ color: "red" }}>
            This is a required field
          </div>
        ) : (
          ""
        )}
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-2">
        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
        <div className="form-outline flex-fill mb-0">
        <input className="form-control"
        style={{ borderBottom: error ? "1px solid red" : "" }}
        name="pinCode"
        defaultValue={values.pinCode}
        type="number"
        placeholder="PinCode"
        onChange={handleFormData("pinCode")}
      />
-         {error ? (
        <div className="form-text" style={{ color: "red" }}>
          This is a required field
        </div>
      ) : (
        ""
      )}
        </div>
      </div>
     
     
      <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button variant="primary" onClick={prevStep}>
        Previous
      </Button>

      <Button variant="primary" type="submit">
        Next
      </Button>
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
    </>
  );
};

export default SecondStep;