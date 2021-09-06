import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
        I am a full stack developer with 9 years of experience in various Technologies.🤷‍♂️
        I worked at the small companies and sefl employed.This way of working give me ample opportunites 
        to gain experience quickly, code in difference environments or tech stacks, and work with 
        different users and clients needs.
        <br/>
        I focused in <br/><b className="purple">React, Redux, Vue, Angular, Javascript, Node.js, Express.js, NPM</b><br/>
        <b className="purple">PHP, Wordpress, Woocommerce, Shopify, Magento 2</b><br/>
        <b className="purple">GITHUB, SVN, AWS, Google Cloud</b>        
        </p>
        </Col>
        <Col md={4} className="myAvtar">
        <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
        </Col>
        </Row>

        </Container>
      </Container>
      );
}
      export default Home2;
