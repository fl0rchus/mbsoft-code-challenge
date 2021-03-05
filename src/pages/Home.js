import React from "react";
import { Link } from "@reach/router";
import Subtitle from "../components/Subtitle";
import HomeItem from "../components/HomeItem";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <main style={{ height: "71.2vh" }}>
      <Subtitle subtitle="Popular Titles" />
      <Container
        fluid
        className="w-100 h-100 mt-5 mb-5 d-flex justify-content-center align-items-center"
      >
        <Row className="d-flex justify-content-center h-100">
          <Col
            style={{ height: "fit-content" }}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="d-flex justify-content-center"
          >
            <Link to="/series">
              <HomeItem title="SERIES" />
            </Link>
          </Col>
          <Col
            style={{ height: "fit-content" }}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="d-flex justify-content-center"
          >
            <Link to="/movies">
              <HomeItem title="MOVIES" />
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
