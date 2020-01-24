import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .select-Component {
    margin: 10px 30px;
    min-height: 80px;
  }
  .select-Label {
    display: flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .select-Select {
    display: flex;
    border: 1px solid ${palette("border", 5)};
    border-radius: 5px;
    margin: 0 !important;
    padding-left: 7px;
    padding-right: 2px;
    overflow: hidden;
    height: 32px;
    width: 100%;
    color: ${palette("color", 14)};
    fill: ${palette("color", 14)};
  }
  .select-Select * {
    border: none;
    font-size: ${size("p1")};
  }
  .select-Select:focus-within {
    outline: none;
  }
  .select-loader {
    display: flex;
    width: 100%;
    height: 32px;
    background-color: ${palette("border", 4)};
    opacity: 0.5;
    border-radius: 5px;
  }
  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }
  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  .select-spinner-icon {
    display: block;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    color: ${palette("color", 16)};
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
  .textBox-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 15)};
    font-weight: 700;
  }

  .required:focus-within {
    box-shadow: 0 0 6px ${palette("color", 18)};
    outline: none;
  }
  .required {
    border: 1px solid ${palette("error", 3)}!important;
  }
  .message {
    display: flex;
    position: absolute;
    padding-left: 3px;
    margin-top: 2px;
    margin-bottom: 0;
    color: ${palette("color", 18)};
    font-size: ${size("p2")};
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
