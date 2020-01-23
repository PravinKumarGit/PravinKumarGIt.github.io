import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .Address-ManualButton {
    display: flex;
    height: 100%;
    background-color: ${palette("grayscale", 13)};
    color: ${palette("color", 14)};
    font-size: ${size("p2")};
    align-items: center;
    border: none;
    min-width: 80px;
  }

  .Address-ManualButton:hover {
    background-color: ${palette("color", 20)};
    color: ${palette("color", 16)};
  }
  .address-wrapper {
    position: relative;
  }
  .pac-container {
    border-left: 1px solid ${palette("border", 5)};
    border-right: 1px solid ${palette("border", 5)};
    border-bottom: 1px solid ${palette("border", 5)};
    background-color: #fff;
    position: absolute;
    z-index: 1000;
    border-top: none;
    box-sizing: border-box;
    overflow: hidden;
    width: 90%;
    top: 56px;
    left: 10px;
  }
  .pac-logo:after {
    content: "";
    padding:5px;
    height: 18px;
    box-sizing: border-box;
    text-align: right;
    display: block;
    background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 120px 14px;
  }

  .pac-item {
    cursor: default;
    padding: 0 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
    text-align: left;
    border-top: 1px solid ${palette("border", 5)};
    font-size:  ${size("p4")};
    color: #999;
  }
  .pac-item:hover {
    background-color: ${palette("grayscale", 5)};
  }
  
  .pac-matched {
    font-weight: 700;
  }
  .pac-item-query {
    font-size:  ${size("p2")};
    padding-right: 3px;
    color: #000;
  }
  .pac-icon {
    width: 15px;
    height: 20px;
    margin-right: 7px;
    margin-top: 6px;
    display: inline-block;
    vertical-align: top;
    background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons.png);
    background-size: 34px;
  }

  .pac-icon-marker {
    background-position: -1px -161px;
  }
`;

export default Wrapper;
