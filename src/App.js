// import './App.css';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from './component/nav/nav';
import Footer from './component/footer/footer';
import AboutMe from './component/about/about_me';

import banner from "./imgs/banner.png";


const Banner = () => {
  return (
    <Image src={banner} fluid/>

  );
}
const App = () => {


  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col >
          <Banner />
        </Col>
      </Row>

      <Row>
        <Col>
          <AboutMe />

        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
