import styled from "styled-components";

const Wrapper = styled.div`
  .UserInputBlock-Container {
    display: grid;
    padding: 10px;
    margin: 30px 5% 20px;
    align-content: center;
    text-align: center;
    background-color: #fff;
    color: #fff;
  }
  .UserInputBlock-Label {
    display: grid;
    grid-template-columns: 1fr 40px;
    align-content: center;
    height: 40px;
    font-size: 20px;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(0, #00673f),
      to(#94c840)
    );
    background: -webkit-linear-gradient(right, #00673f, #94c840);
    background: linear-gradient(270deg, #00673f 0, #94c840);
  }
  .content-show {
    display: grid;
    align-content: center;
    grid-template-columns: 50% 50%;
    justify-items: legacy;
    padding-left: 4vw;
    grid-template-columns: 100%;
    background-color: rgb(0, 103, 63);
  }
  .content-hide {
    display: none;
  }
  .pageOne-ApplicationInformation-Section {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .listBox-Container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-size: 15px;
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
    text-align: justify;
  }
  .listBox-text {
    margin-left: 5px;
    font-size: small;
  }
  .listBox-Title {
    text-align: justify;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    -webkit-margin-before: 0;
    margin-block-start: 0;
  }
  .listBox-Item:before {
    color: #94c840;
    content: "•";
    font-size: 20px;
  }
`;

export default Wrapper;
