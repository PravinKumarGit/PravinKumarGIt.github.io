import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  .referral-form-instructions {
    font-size: ${size("p1")}
    margin-bottom: 1.1rem;
    padding-bottom: 0.5rem;
  }
  .referral-form-start-padding {
    padding-bottom: 10px;
  }
  .referral-form-section {
    font-size: ${size("h4")}
    border-bottom: 1px solid #0000002e;
    margin-bottom: 1.1rem;
    padding-bottom: 0.5rem;
  }
  .referral-form-end-padding {
    padding-bottom: 10px;
  }
  .referral-form-disclaimer {
    text-align: center
    color: ${palette("color", 17)};
    font-size: ${size("p3")}
  }
`;

export default Wrapper;
