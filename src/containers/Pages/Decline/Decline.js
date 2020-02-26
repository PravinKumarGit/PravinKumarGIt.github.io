import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";

import TopHeader from "../../../components/uielements/topHeader";

import Wrapper from "../Decline/Decline.styles";

export default function() {
  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader />
        </Col>
        <Col lg={12}></Col>
      </Row>
    </Wrapper>
  );
}
