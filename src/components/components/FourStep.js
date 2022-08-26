import React, { useState } from "react";
import validator from "validator";
import {Row, Container, Col,Button } from "react-bootstrap";
import "./style2.css";
import SignIn from "../images/Regi2.png";
import Student from "../images/Student.svg"

const FourStep = ({ nextStep,prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.name_of_organization) ||
      validator.isEmpty(values.designation)||
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
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          type="text"
                          name="name_of_organization"
                          placeholder="name_of_organization"
                          defaultValue={values.name_of_organization}
                          style={{
                            borderBottom: error ? "1px solid red" : "",
                          }}
                          onChange={handleFormData("name_of_organization")}
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
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className="form-control"

                              style={{
                                borderBottom: error ? "1px solid red" : "",
                              }}
                              name="Area_of_intrest"
                              defaultValue={values.designation}
                              onChange={handleFormData("designation")}
                              type="text"
                              placeholder="designation"
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
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            className="form-control"

                            style={{
                              borderBottom: error ? "1px solid red" : "",
                            }}
                            name="Area_of_intrest"
                            defaultValue={values.resume}
                            onChange={handleFormData("resume")}
                            type="file"
                            placeholder="resume"
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

export default FourStep;
