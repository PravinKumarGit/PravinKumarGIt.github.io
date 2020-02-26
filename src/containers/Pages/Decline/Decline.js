import React from "react";
import { Row, Col } from "react-grid-system";

import TopHeader from "../../../components/uielements/topHeader";
import Banner from "./Components/banner";
import Options from "./Components/options";

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
      <div className="options-wrapper">
        <Row>
          <Col lg={3} />
          <Col lg={6}>
            <Options />
          </Col>
          <Col lg={3} />
        </Row>
      </div>
    </Wrapper>
  );
}
