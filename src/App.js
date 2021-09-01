// import './App.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from './component/nav/nav';
import Footer from './component/footer/footer';
import AboutMe from './component/about/about_me';

import banner from "./imgs/banner.png";
import blogServices from './services/backend';
import Blog from './component/blogs/blogs';
import Markdown from './component/markdown/markdown';

const Banner = () => {
  return (
    <Image src={banner} fluid />

  );
}
const App = () => {

  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    blogServices.getAllBlog()
      .then(blog => setBlogs(blog))
  }, [])

  const blogCards = blogs.map((blog) => <Blog key={blog.id} title={blog.title} content={blog.content} date={blog.created_at} />)

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
      {/* <Row>
        <Col>
          <Markdown />

        </Col>
      </Row> */}

      <Row>
        <Col>
          <h2>Blogs</h2>
          {blogCards}
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
