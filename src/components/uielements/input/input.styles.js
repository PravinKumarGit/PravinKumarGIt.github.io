import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .textBox {
    display: flex;
    margin: 10px 30px;
    height: 80px;
    flex-direction: column;
    position: relative;
  }
  .textBox-Label-Container {
    display: flex;
    width: fit-content;
  }
  .textBox-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("formInputElement", 0)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .textBox-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 15)};
    font-weight: 700;
  }
  .textBox-Input {
    display: flex;
    border: 1px solid ${palette("formInputElement", 1)};
    border-radius: 5px;
    height: 30px;
    margin: 0 !important;
    overflow: hidden;
  }
  .textBox-Icon {
    color: ${palette("formInputElement", 1)};
    border-right: 1px solid ${palette("formInputElement", 1)};
    margin-right: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textBox-Icon-Suffix {
    color: ${palette("formInputElement", 1)};
    border-left: 1px solid ${palette("formInputElement", 1)};
    margin-left: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .textBox-Icon * {
    display: inherit;
    font-size: ${size("p1")};
  }
  .textBox-Input input {
    display: inline-block;
    border: none;
    align-content: center;
    width: 100%;
    font-size: ${size("p1")};
    padding: none !important;
    color: ${palette("color", 14)};
    text-overflow: ellipsis;
    padding-left: 10px;
  }
  .textBox-Input input:focus {
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
  .textBox-Input input::placeholder {
    color: ${palette("formInputElement", 2)};
    font-weight: lighter;
  }

`;

export default Wrapper;
