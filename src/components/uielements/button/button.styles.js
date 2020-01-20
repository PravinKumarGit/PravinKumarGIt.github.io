import styled from "styled-components";

const Wrapper = styled.div`
  .button-Container {
    align-self: center;
    color: black;
  }

  .button-Button {
    border: none;
    background-color: #00673f;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    color: white;
    opacity: 0.85;
    font-size: 16px;
  }

  .disabled {
    background-color: gray;
    opacity: 0.3;
    pointer-events: none;
  }

  .button-Button:hover {
    opacity: 1;
  }
`;

export default Wrapper;
