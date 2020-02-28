import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  .pct-show {
    color: ${palette("color", 15)};
    text-decoration: none;
  }

  .pct-show:hover {
    color: ${palette("color", 17)};
    text-decoration: underline;
  }
`;

export default Wrapper;
