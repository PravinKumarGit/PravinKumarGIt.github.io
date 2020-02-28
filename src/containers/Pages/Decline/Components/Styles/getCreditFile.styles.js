import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  display: inline;
  .get-credit-file-button {
    display: inline-flex;
    align-items: center;
    align-content: center;
    border: 1px solid #808080;
    background: #FDFFF9;
    padding:3px;
    text-decoration: none;
    color: ${palette("color", 14)};
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .get-credit-file-button:hover {
    background-color: ${palette("color", 14)};
    color: ${palette("color", 16)};
    border: 1px solid #808080;
  }
  .get-credit-file {
    display: inline;
  }
  .get-credit-file-padding {
    padding-bottom: 4%;
  }
  .get-credit-file-button-content-spacing {
    padding-right:8px;
    height: 100%;
  }
  .get-credit-file-message {
    color: ${palette("color", 17)};
  }
  .get-credit-file-button-text {
    height: 100%;
  }
  .get-credit-file-button-icon {
    line-height: 10px;
    color: ${palette("color", 17)};
    height: 100%;
  }
`;

export default Wrapper;
