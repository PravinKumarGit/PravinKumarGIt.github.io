import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .button-Container {
    align-self: center;
    color: black;
    padding: 10px 30px;
  }

  .button-Button {
    border: none;
    background-color: ${palette("color", 15)};
    border-radius: 5px;
    height: 40px;
    color: ${palette("color", 16)};
    opacity: 0.85;
    font-size: ${size("p0")};
    width: 100%;
    position: relative;
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
