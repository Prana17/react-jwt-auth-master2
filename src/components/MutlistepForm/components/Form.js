import React from 'react';
import React,{useState} from "react";
import { Card,Form,Button, Row,Container,Col } from "react-bootstrap";
import Axios from "axios";


const Final = ({ values }) => {
  const { stud_name,stud_dob,email,gender,phone_num,posttal_address,pinCode,qualification,Area_of_intrest,experience} = values;
  console.log(values);
  stud_name = useState("setStud_name");
  stud_dob = useState("setStud_dob");
  email = useState("setEmail");
  gender = useState("setGender");
  phone_num = useState("setPhone_num");
  posttal_address = useState("setPosttal_address");
  pinCode = useState("setPinCode");
  qualification = useState("setQualification");
  Area_of_intrest = useState("setArea_of_intrest");
  experience = useState("setExperience");

  
  email = useState("setEmail");
 mobileNumber = useState("setMobileNumber");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stud_name}
          placeholder="Name"
          onChange={(e) => setStud_name(e.target.value)}
        />
        <input
          type="text"
          value={stud_dob}
          placeholder="Email"
          onChange={(e) => setStu(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form