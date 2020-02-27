import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  overflow: hidden;
  .decline-content {
  }
  .decline-banner-wrapper {
    padding-top: 7%;
    padding-bottom: 4%;
  }
  .decline-options-wrapper {
    padding-top: 4%;
    padding-bottom: 4%;
  }
  .decline-message-wrapper {
    padding-top: 6%;
    padding-bottom: 6%;
  }
  .decline-message {
    text-align: center;
    color: ${palette("color", 17)};
  }
  .footer-wrapper {
    width: 100%;
  }
`;

export default Wrapper;
