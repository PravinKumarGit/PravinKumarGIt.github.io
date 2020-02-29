import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .textBox {
    display: flex;
    margin: 10px opx;
    height: 85px;
    flex-direction: column;
  }
  .textBox-Label-Container {
    display: flex;
    width: fit-content;
  }
  .textBox-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .textBox-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 17)};
    font-weight: 700;
  }
  .textBox-Input {
    display: flex;
    border: 1px solid;
    border-radius: 5px;
    height: 32px;
    margin: 0 !important;
    overflow: hidden;
  }
  .textBox-Icon {
    color: ${palette("border", 6)};
    border-right: 1px solid ${palette("border", 5)};
    margin-right: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    position: absolute;
    padding-left: 3px;
    margin-top: 2px;
    margin-bottom: 0;
    color: ${palette("color", 18)};
    font-size: ${size("p2")};
  }
  .iconRequired {
    border-right: 1px solid ${palette("error", 3)};
    color: ${palette("error", 3)};
  }
  .react-calendar__month-view__weekdays {
    font-size: ${size("p2")};
    color: ${palette("color", 19)};
  }
  .react-calendar__navigation {
    margin-bottom: 0;
  }
  .react-calendar__navigation button {
    font-weight: bold;
    font-size: ${size("h6")};
    color: ${palette("color", 15)};
  }
  .react-calendar__tile {
    font-size: ${size("p2")};
  }
  .react-date-picker__wrapper {
    border: 1px solid ${palette("border", 5)};
    border-radius: 5px;
    height: 30px;
  }
  .react-date-picker__inputGroup {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    font-size: ${size("p1")};
    color: ${palette("color", 14)};
    text-overflow: ellipsis;
  }
  .react-date-picker__inputGroup__divider {
    font-size: ${size("p1")};
    color: ${palette("color", 14)};
  }
  .react-date-picker__button__icon {
    stroke: ${palette("color", 14)};
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: ${palette("color", 15)};
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
`;

export default Wrapper;
