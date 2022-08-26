import React, { useState } from "react";
import validator from "validator";
import {Row, Container, Col,Button } from "react-bootstrap";
import "./style2.css";
import SignIn from "../images/Regi2.png";
import Student from "../images/Student.svg"

// creating functional component ans getting props from app.js and destucturing them
const ThirdStep = ({ nextStep,prevStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.qualification) ||
      validator.isEmpty(values.experience) ||
      validator.isEmpty(values.Area_of_intrest)
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
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <select
                          className="form-control"
                          type="select"
                          name="qualification"
                          placeholder="Qualification"
                          defaultValue={values.qualification}
                          style={{
                            borderBottom: error ? "1px solid red" : "",
                          }}
                          onChange={handleFormData("qualification")}
                        >
                        <option>Qualification</option>
                        <option value="12th">12th</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        </select>
                        {error ? (
                          <div
                            className="form-text"
                            style={{ color: "red" }}
                          >
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
                            <input
                              className="form-control"

                              style={{
                                borderBottom: error ? "1px solid red" : "",
                              }}
                              name="Area_of_intrest"
                              defaultValue={values.Area_of_intrest}
                              onChange={handleFormData("Area_of_intrest")}
                              type="text"
                              placeholder="Area of intrest"
                            />
                            {error ? (
                              <div
                                className="form-text"
                                style={{ color: "red" }}
                              >
                                This is a required field
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <select
                            className="form-control"
                            type="select"
                            name="experience"
                            defaultValue={values.experience}
                            style={{
                              borderBottom: error ? "1px solid red" : "",
                            }}
                            onChange={handleFormData("experience")}
                          >
                          <option>Experience</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="2+">2+</option>
                          </select>
                          {error ? (
                            <div
                              className="form-text"
                              style={{ color: "red" }}
                            >
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
    </div>
  );
};

export default ThirdStep;
