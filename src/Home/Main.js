//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Home/HeroSection";
import About from "../Home/About";
import Contact from "../Home/Contact";
import styled from "styled-components";

const Container = styled.div`
margin:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   position: relative; 
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About/>
        <Contact/>
      <styled/>
    </Container>
  );
};

export default Home;
