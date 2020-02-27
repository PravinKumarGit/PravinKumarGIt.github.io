import React from "react";
import { Row, Col } from "react-grid-system";

import TopHeader from "../../../components/uielements/topHeader";
import Banner from "./Components/declineBanner";
import Options from "./Components/options";

import Footer from "../../../components/uielements/footer";

import Wrapper from "../Decline/Decline.styles";

const Decline = props => {
  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader />
        </Col>
      </Row>
      <div className="decline-content">
        <div className="decline-banner-wrapper">
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <Banner />
            </Col>
            <Col lg={3} />
          </Row>
        </div>
        <div className="decline-options-wrapper">
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <Options {...props} />
            </Col>
            <Col lg={3} />
          </Row>
        </div>
        <div className="decline-message-wrapper">
          <Row>
            <Col lg={3} />
            <Col lg={6}>
              <div className="decline-message">
                Thank you again for considering us.
                <br />
                <br />
                The Fair Go Finance team.
              </div>
            </Col>
            <Col lg={3} />
          </Row>
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Wrapper>
  );
}

export default Decline
