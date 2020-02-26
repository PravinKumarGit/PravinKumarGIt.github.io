import React from "react";
import { Row, Col } from "react-grid-system";

import TopHeader from "../../../components/uielements/topHeader";
import Banner from "./Components/banner";

import Wrapper from "../Decline/Decline.styles";

export default function() {
  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader />
        </Col>
      </Row>
      <div className="banner-wrapper">
        <Row>
          <Col lg={3} />
          <Col lg={6}>
            <Banner />
          </Col>
          <Col lg={3} />
        </Row>
      </div>
      <Row>
        <Col></Col>
      </Row>
    </Wrapper>
  );
}
