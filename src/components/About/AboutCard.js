import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Troy </span>
            from <span className="purple"> China.</span>
            <br />I am a senior web developer with modern trends web development.
            <br />Many of client like more faster, more clear, more creative website.
            <br />Here I am for the clients.            
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Strive to build the many many websites.
          </p>
          <footer className="blockquote-footer">Troy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
