import styled from "styled-components";

const Wrapper = styled.div`
  .textBox {
    display: flex;
    margin: 10px;
    width: 290px;
    height: 80px;
    flex-direction: column;
    position: relative;
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
    height: 30px;
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
    position: absolute;
    padding-left: 1px;
    color: #fb5708;
    font-size: 13px;
    top: 54px;
  }
  .iconRequired {
    border-right: 1px solid red;
    color: red;
  }
  .textBox-Input input::placeholder {
    color: gray;
    font-weight: lighter;
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
