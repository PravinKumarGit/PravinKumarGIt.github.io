import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .options {
    display: grid;
    grid-template-columns: auto;
  }
  .options-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-size: ${size("p1")};
  }
  .options-title {
    color: ${palette("color", 14)};
    font-size: ${size("h4")};
  }
  .options-padding {
    padding-bottom: 40px;
  }
`;

export default Wrapper;
