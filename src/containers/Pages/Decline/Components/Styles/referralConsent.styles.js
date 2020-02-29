import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  display: inline;
  .referral-consent {
    display: inline;
  }
  .referral-consent-message {
    color: ${palette("color", 17)};
  }
  .referral-consent-padding {
    padding: 10px;
  }
  .referral-consent-content {
    margin-left: -30px;
  }
  .referral-consent-form-wrapper {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default Wrapper;
