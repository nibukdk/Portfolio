// import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from './component/nav/nav';
import Footer from './component/footer/footer';
import AboutMe from './component/about/about_me';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>

      <Row>
        <Col lg="">
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
