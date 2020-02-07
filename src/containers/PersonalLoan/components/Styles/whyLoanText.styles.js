import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .pageOne-ApplicationInformation {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .listBox-Container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-size: ${size("p1")};
  }
  .listBox-Container ul {
    -webkit-padding-start: 10px;
    padding-inline-start: 10px;
    -webkit-padding-end: 10px;
    padding-inline-end: 10px;
    margin-bottom: 15px;
  }
  .listBox-Item {
    list-style: none;
    padding-left: 3px;
    text-align: left;
  }
  .listBox-text {
    margin-left: 5px;
    font-size: ${size("p2")};
  }
  .listBox-Title {
    text-align: justify;
    font-size: ${size("p2")};
    font-weight: 700;
    color: ${palette("color", 16)};
    margin-bottom: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
  }
  .listBox-Item:before {
    color: ${palette("color", 14)};
    content: "•";
    font-size: ${size("h5")};
  }
  @media only screen and (max-width: ${size("M")}) {
    .pageOne-ApplicationInformation {
      grid-template-columns: 100%;
    }
  }
`;

export default Wrapper;
