import React, { useState } from "react";
import { Form, Card, Button, Row, Container, Col } from "react-bootstrap";
import validator from "validator";
import SignUp from "../images/Regi2.png";
import Student from "../images/Student.svg"

import "./style2.css";
const FirstStep = ({ nextStep,prevStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(e);

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.stud_name) ||
      validator.isEmpty(values.stud_dob) ||
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.gender) ||
      validator.isEmpty(values.phone_num)
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
        <Col
        lg={6}
        md={6}
        sm={12}
        className="Imgclass"
      >
        <img className="w-100  mt-5" src={SignUp} alt="icon" />
        <h6 className="text-center">
          Welcome to Aksesso
          <br />
          Bright Future is waiting for you.
        </h6>
      </Col>
          <Col lg={6} md={6} sm={12} className="text-center ">
           
          <img src={Student} className="img-fluid" alt="Sample image" />
          <h4
            className=" heading text-center fw-bolder mb-1"
            style={{ fontColor: "#4481eb" }}
          >
           Student Registeration
          </h4>
            <form className="mx-1 mx-md-4" onSubmit={submitFormData}>
              <div className="d-flex flex-row align-items-center mb-2">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="stud_name"
                    defaultValue={values.stud_name}
                    type="text"
                    placeholder="Student Name"
                    onChange={handleFormData("stud_name")}
                  />
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
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="stud_dob"
                    defaultValue={values.stud_dob}
                    type="date"
                    onChange={handleFormData("stud_dob")}
                  />
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
                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="email"
                    defaultValue={values.email}
                    type="text"
                    placeholder="Email"
                    onChange={handleFormData("email")}
                  />
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
                <i className="fas fa-key fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <select
                    className="form-control"
                    type="select"
                    aria-label="Default select example"
                    name="gender"
                    defaultValue={values.gender}
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    onChange={handleFormData("gender")}
                  >
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
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
                <i className="fas fa-key fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="phone_num"
                    defaultValue={values.phone_num}
                    type="text"
                    placeholder="Phone number"
                    onChange={handleFormData("phone_num")}
                  />
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}{" "}
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
                <button
                  variant="primary"
                  className="btn btn-primary btn-lg"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </Col>
      
        </Row>
      </Container>
    </div>
  );
};

export default FirstStep;
