import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .modalContent div,
  .modalContent h1,
  .modalContent h2,
  .modalContent h3,
  .modalContent h4,
  .modalContent h5,
  .modalContent h6,
  .modalContent p {
    font-family: Arial !important;
  }
  .nccp-act {
    font-style: italic;
  }
  .small-loan-warning-asterix {
    font-family: Arial;
    font-size: 14px;
  }
  a {
    color: ${palette("color", 14)};
    text-decoration: none;
  }
  .btn-yellow {
    background: ${palette("color", 22)};
    border: 1px solid ${palette("color", 23)};
    color: ${palette("color", 16)};
  }
  .btn-yellow-outline {
    background: ${palette("color", 16)};
    border: 1px solid ${palette("color", 23)};
    color: ${palette("color", 23)};
  }
  .btn-yellow-outline:hover {
    color: ${palette("color", 16)} !important;
    background: ${palette("color", 22)} !important;
    border-color: ${palette("color", 23)} !important;
  }
  .btn {
    min-width: 100px;
    padding: 6px 12px;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border-radius: 4px;
    margin: 5px 0 5px 5px;
  }
  .sub-text {
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
  .label-text {
    font-size: 13px;
    color: #7b7b7b;
    line-height: 16px;
    margin-bottom: 0px;
  }
  ul {
    padding-left: 20px;
    margin-bottom: 15px;
    display: block;
    list-style-type: disc;
  }
  .modalContent {
    font-size: ${size("p5")};
    text-align: left;
    display: block;
    padding: 16px;
  }
  .modalContent h3 {
    margin-top: ${size("p3")};
    margin-bottom: ${size("p3")};
  }
  .modalContent p {
    margin-top: ${size("p5")};
    margin-bottom: ${size("p5")};
  }
  .button-Button {
    color: ${palette("color", 0)};
    margin-right: 5px;
    width: 70px;
    height: 30px;
    background-color: ${palette("color", 16)};
    border: 1px solid ${palette("color", 0)};
    font-size: ${size("p0")};
    border-radius: 5px;
  }
  .icon {
    width: 25px;
  }
  .title {
    padding-left: 10px;
  }
  h1 {
    font-weight: normal;
    font-size: 18px;
    color: ${palette("color", 17)};
    padding-bottom: 15px;
}
`;

export default Wrapper;
