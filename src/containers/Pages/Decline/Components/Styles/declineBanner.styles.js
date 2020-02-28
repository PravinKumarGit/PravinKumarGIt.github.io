import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .decline-banner {
    display: grid;
    grid-template-columns: auto;
  }
  .decline-banner-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-size: ${size("p1")};
    text-align: center;
  }
  .decline-banner-title {
    color: ${palette("color", 14)};
    font-size: ${size("h3")};
  }
  .decline-banner-padding {
    height: 16px;
  }
  .decline-banner-description {
    color: ${palette("color", 17)};
  }
`;

export default Wrapper;
