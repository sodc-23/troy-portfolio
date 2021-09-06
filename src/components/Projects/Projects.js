import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import xcapade from "../../Assets/Projects/xcapade.png";
import trello from "../../Assets/Projects/trello.png";
import design from "../../Assets/Projects/design.png";
import blussell from "../../Assets/Projects/blussell.png";
import suicide from "../../Assets/Projects/22.png";
import bitsOfCode from "../../Assets/Projects/33.png";
import healthy from "../../Assets/Projects/44.png";
import kelley from "../../Assets/Projects/55.png";
import fab from "../../Assets/Projects/66.png";
import test from "../../Assets/Projects/test.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Portfolio </strong>
        </h1>        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xcapade}
              isBlog={false}
              title="React"
              description=""
              link="https://www.mm.xcapade.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="React"
              description=""
              link="http://www.what-song.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="React"
              description=""
              link="https://sodeveloper.com/design_tool"
            />
          </Col>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blussell}
              isBlog={false}
              title="News"
              description="wordpress"
              link="http://www.brusselstimes.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Frosting"
              description="wordpress, Woocommerce"
              link="https://frostingmarket.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Itoolco"
              description="wordpress, woocommerce"
              link="https://itoolco.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthy}
              isBlog={false}
              title="Healthyxpress"
              description="Shopify"
              link="https://healthyxpress.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kelley}
              isBlog={false}
              title="Kelley"
              description="Shopify"
              link="https://kellyskookies.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fab}
              isBlog={false}
              title="Fab"
              description="Shopify"
              link="https://fab.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="React, Redux"
              description=" "
              link="https://github.com/sod-21/react-redux-start-kit-with-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="React"
              description=" "
              link="https://github.com/scgroner/codetest-frontend-sod-21"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={false}
              title="React Native"
              description=" "
              link="https://github.com/sod-21/booking_native"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
