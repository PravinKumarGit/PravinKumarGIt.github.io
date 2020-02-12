import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  text-align: center;
  .page-heading {
    color: ${palette("color", 14)};
    font-weight: 400;
    font-size: ${size("p6")};
    line-height: 33px;
    margin: 20px;
  }
  .page-subheading {
    font-size: ${size("p2")};
    color: ${palette("color", 17)};
    line-height: 16px;
  }
`;

export default Wrapper;
