import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FbIcon from "../assets/social/facebook-white.svg";
import TwIcon from "../assets/social/twitter-white.svg";
import IgIcon from "../assets/social/instagram-white.svg";
import AppStore from "../assets/store/app-store.svg";
import PlayStore from "../assets/store/play-store.svg";
import MicrosoftStore from "../assets/store/windows-store.svg";

const Social = () => {
  return (
    <Row style={{ width: "30%" }}>
      <Col xs={4}>
        <img src={FbIcon} alt="Facebook" style={{ width: "0.7em" }} />
      </Col>
      <Col xs={4}>
        <img src={TwIcon} alt="Twitter" style={{ width: "1.2em" }} />
      </Col>
      <Col xs={4}>
        <img src={IgIcon} alt="Instragram" style={{ width: "1em" }} />
      </Col>
    </Row>
  );
};

const Stores = () => {
  return (
    <Row style={{ width: "80%" }}>
      <Col xs={12} sm={4}>
        <img src={AppStore} alt="App Store" />
      </Col>
      <Col xs={12} sm={4}>
        <img src={PlayStore} alt="Google Play" />
      </Col>
      <Col xs={12} sm={4}>
        <img src={MicrosoftStore} alt="Microsoft" style={{ width: 120 }} />
      </Col>
    </Row>
  );
};

const InnerGrid = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={6}>
        <Social />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={6}>
        <Stores />
      </Col>
    </Row>
  );
};

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={12} sm={12} md={12}>
          <p>
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-muted">
            Copyright &copy; 2016 DEMO Streaming. All right reserved.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <InnerGrid />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
