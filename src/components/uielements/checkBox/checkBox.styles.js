import styled from "styled-components";

const Wrapper = styled.div`
  .checkBox-Component {
    display: grid;
    color: #7b7b7b;
    font-size: 13px;
    line-height: 16px;
    grid-template-columns: 30px 1fr;
  }

  .required {
    color: red;
    border: 1px solid red;
  }

  .checkBox-InformationContainer {
    text-align: left;
  }

  .checkBox-InformationContainer:hover {
    cursor: pointer;
  }

  .checkBox-Label {
    margin-right: 3px;
    float: left;
    font-weight: bold;
  }
`;

export default Wrapper;
