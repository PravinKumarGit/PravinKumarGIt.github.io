import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  .referral-form {
    width:100%;
  }
  .referral-form-disclaimer {
    text-align: center
    color: ${palette("color", 17)};
    font-size: ${size("p3")}
  }
`;

export default Wrapper;
