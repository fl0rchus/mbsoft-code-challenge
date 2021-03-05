import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <Container fluid className="header">
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} sm={12} md={6}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <h2>DEMO Streaming</h2>
          </Link>
        </Col>
        <Col xs={12} sm={12} md="auto">
          <Button className="button-transparent">Log in</Button>
          <Button variant="dark">Start your free trial</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
