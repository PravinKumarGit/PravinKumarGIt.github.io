import styled from "styled-components";

const Wrapper = styled.div`
  .textBox {
    display: block;
    margin: 10px;
    width: 290px;
    height: 85px;
    float: left;
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
`;

export default Wrapper;
