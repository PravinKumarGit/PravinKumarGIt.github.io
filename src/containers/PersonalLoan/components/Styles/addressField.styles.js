import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .Address-ManualButton {
    display: flex;
    height: 100%;
    background-color: ${palette("grayscale", 13)};
    color: ${palette("color", 14)};
    font-size:  ${size("p2")};
    align-items: center;
    border: none;
  }

  .Address-ManualButton:hover {
    background-color: ${palette("color", 20)};
    color: ${palette("color", 16)};
  }
`;

export default Wrapper;
