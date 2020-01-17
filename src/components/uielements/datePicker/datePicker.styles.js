import styled from "styled-components";

const Wrapper = styled.div`
  .textBox {
    display: flex;
    margin: 10px;
    width: 290px;
    height: 85px;
    flex-direction: column;
  }
  .textBox-Label-Container {
    display: flex;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .textBox-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: grey;
    font-weight: 700;
    font-size: 13px;
  }
  .textBox-Input {
    display: flex;
    border: 1px solid rgba(148, 200, 64, 0.3);
    border-radius: 5px;
    height: 32px;
    margin: 0 !important;
    overflow: hidden;
  }
  .textBox-Icon {
    color: rgba(148, 200, 64, 0.5);
    border-right: 1px solid rgba(148, 200, 64, 0.3);
    margin-right: 7px;
    min-width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textBox-Icon * {
    display: inherit;
    font-size: 15px;
  }
  .textBox-Input input {
    display: inline-block;
    border: none;
    align-content: center;
    width: 100%;
    font-size: 15px;
    padding: none !important;
    color: #94c840;
    text-overflow: ellipsis;
  }
  .textBox-Input input:focus {
    outline: none;
  }
  .required:focus-within {
    box-shadow: 0 0 6px #fb5708;
    outline: none;
  }
  .required {
    border: 1px solid red !important;
  }
  .message {
    display: flex;
    position: absolute;
    padding-left: 3px;
    margin-top: 2px;
    margin-bottom: 0;
    color: #fb5708;
    font-size: 13px;
  }
  .iconRequired {
    border-right: 1px solid red;
    color: red;
  }
  .react-calendar__month-view__weekdays {
    font-size: 13px;
    color: #7bb840;
  }
  .react-calendar__navigation {
    margin-bottom: 0;
  }
  .react-calendar__navigation button {
    font-weight: bold;
    font-size: 18px;
    color: #00673f;
  }
  .react-calendar__tile {
    font-size: 14px;
  }
  .react-date-picker__wrapper {
    border: 1px solid rgba(148, 200, 64, 0.3);
    border-radius: 5px;
    height: 30px;
  }
  .react-date-picker__inputGroup {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .react-date-picker__inputGroup__input, .react-date-picker__inputGroup__leadingZero {
    font-size: 15px;
    color: #94c840;
    text-overflow: ellipsis;
  }
  .react-date-picker__inputGroup__divider {
    font-size: 15px;
    color: #94c840;
  }
  .react-date-picker__button__icon {
    stroke: #94c840;
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: #00673f;
  }
  .toolTip-Icon {
    float: left;
    text-decoration: none;
    position: relative;
    height: 15px;
    width: 15px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    font-size: 11px;
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
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 1px 2px #8888886e;
  }
`;

export default Wrapper;
