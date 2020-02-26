import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .decline-Banner {
    display: grid;
    grid-template-columns: auto;
  }
  .container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-size: ${size("p1")};
    text-align: center;
  }
  .title {
    color: ${palette("color", 14)}; 
  }
`;

export default Wrapper;
