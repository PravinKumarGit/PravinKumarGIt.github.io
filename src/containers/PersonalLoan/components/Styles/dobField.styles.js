import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .selectBox {
    display: flex;
    margin: 10px 0px;
    height: 80px;
    flex-direction: column;
    position: relative;
  }
  .selectBox-Label-Container {
    display: flex;
    width: fit-content;
  }
  .selectBox-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("formInputElement", 0)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .selectBox-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 17)};
    font-weight: 700;
  }
  .selectBox-Input {
    height: 32px;
    margin: 0 !important;
  }
  .selectBox-Icon {
    color: ${palette("border", 6)};
    border-right: 1px solid ${palette("formInputElement", 1)};
    margin-right: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selectBox-Icon-Suffix {
    color: ${palette("border", 6)};
    border-left: 1px solid ${palette("border", 5)};
    margin-left: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .selectBox-Icon * {
    display: inherit;
    font-size: ${size("p1")};
  }
  .selectBox-Input input {
    display: inline-block;
    border: none;
    align-content: center;
    width: 100%;
    font-size: ${size("p1")};
    padding: none !important;
    color: ${palette("formInputElement", 1)};
    text-overflow: ellipsis;
  }
  .selectBox-Input input:focus {
    outline: none;
  }
  .required:focus-within {
    box-shadow: 0 0 6px ${palette("color", 18)};
    outline: none;
  }
  .required {
    border: 1px solid ${palette("error", 3)}!important;
  }
  .message {
    padding-left: 1px;
    color: ${palette("color", 18)};
    font-size: ${size("p2")};
  }
  .iconRequired {
    border-right: 1px solid ${palette("error", 3)};
    color: ${palette("error", 3)};
  }
  .toolTip-Icon {
    float: left;
    text-decoration: none;
    position: relative;
    height: 15px;
    width: 15px;
    cursor: pointer;
    color: ${palette("color", 16)};
    border-radius: 10px;
    font-size: ${size("p4")};
    margin-left: 5px;
  }

  .toolTip-Icon span {
    display: none;
  }

  .toolTip-Icon:hover span {
    display: block;
    position: absolute;
    overflow: hidden;
    bottom: 20px;
  }

  .toolTip-Text {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 5px;
    width: 200px;
    color: gray;
    background-color: ${palette("color", 16)};
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 1px 2px ${palette("grayscale", 12)};
  }
  .Input-field {
    display: flex;
    flex-direction: row;
  }
  .select-Select {
    display: flex;
    border: none;
    border-radius: 5px;
    margin: 0 !important;
    padding-left: 7px;
    padding-right: 2px;
    overflow: hidden;
    height: 30px;
    width: 100%;
    color:${palette("formInputElement", 2)};
    fill: ${palette("formInputElement", 2)};
    background-color:${palette("formInputElement", 5)};
    border: 1px solid${palette("formInputElement", 2)};
  }
  .select-Select * {
    border: none;
    font-size: ${size("p1")};
  }
  .select-Select:focus-within {
    outline: none;
  }

  .dob-input-wrap {
    display: flex;
    flex-direction: row;
    padding: 0 !important;
  }
  .dob-input {
    width: 100%;
    margin-right: 5%;
  }
  .dob-input-last {
    width: 100%;
  }
  @media only screen and (max-width: ${size("M")}) {
    .pageOne-ApplicationInformation {
      grid-template-columns: 100%;
    }
  }
`;

export default Wrapper;
