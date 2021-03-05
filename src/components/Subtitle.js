import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Subtitle = ({ subtitle }) => {
  return (
    <Container fluid className="subtitle">
      <Row>
        <Col>
          <h3>{subtitle}</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Subtitle;
