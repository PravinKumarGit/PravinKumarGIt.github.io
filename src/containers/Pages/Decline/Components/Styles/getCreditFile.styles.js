import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  display: inline;
  .referral-consent {
    display: inline;
  }
  .padding {
    padding-bottom: 4%;
  }
  .content-spacing {
    padding-right:5px;
  }
  .message {
    color: ${palette("color", 17)};
  }
  .icon {
    color: ${palette("color", 17)};
  }
  .content {
    
  }
  .get-credit-file-button {
    display: inline-flex
    align-items: flex-start
    border-color: ${palette("color", 17)};
    background: #FDFFF9;
  }
`;

export default Wrapper;
