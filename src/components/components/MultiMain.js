import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Final from "./Final";
import FourStep from "./FourStep";


function MultiMain() {
    const [step, setstep] = useState(1);
    
    
    const Data =JSON.parse(localStorage.getItem('user'));
    console.log(Data);


    //state for form data
    const [formData, setFormData] = useState({
      stud_name: "",
      stud_dob: "",
      email: "",
      gender: "",
      phone_num:"",
      posttal_address:"",
      pinCode:"",
      qualification:"",
      Area_of_intrest:"",
      experience:"",
      name_of_organization:"",
      designation:""
  
    })
  
    // function for going to next step by increasing step state by 1
    const nextStep = () => {
      setstep(step + 1);
    };
  
    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
      setstep(step - 1);
    };
  
    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
      // input value from the form
      const {value } = e.target;
  
      //updating for data state taking previous state and then adding new value to create new object
      setFormData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }
  
  
  // javascript switch case to show different form in each step
    switch (step) {
      // case 1 to show FirstStep form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 1:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={12} className="">
                  <FirstStep nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // case 2 to show SecondStep form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
      case 2:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={12} className="custom-margin">
                  <SecondStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
  
        case 3:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={12} className="custom-margin">
                  <ThirdStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
        case 4:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col  md={12} className="custom-margin">
                    <FourStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                  </Col>
                </Row>
              </Container>
            </div>
          );
        // Only formData is passed as prop to show the final value at form submit
     
        case 5:
        return (
          <div className="App">  
            <Container>
              <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Final nextStep={nextStep}  prevStep={prevStep} values={formData}  />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // default case to show nothing
      default:
        return (
          <div className="App">
          </div>
        );
    }
  }
  

export default MultiMain