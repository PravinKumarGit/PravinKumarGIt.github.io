import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .privacyModalContent {
    font-size: ${size("p5")};
    text-align: left;
  }
  .privacyModalContent h3 {
    margin-top: ${size("p3")};
    margin-bottom: ${size("p3")};
  }
  .privacyModalContent p {
    margin-top: ${size("p5")};
    margin-bottom: ${size("p5")};
  }
  .button-Button {
    color: ${palette("color", 0)};
    margin-right: 5px;
    width: 70px;
    height: 30px;
    background-color: ${palette("color", 16)};
    border: 1px solid ${palette("color", 0)};
    font-size: ${size("p0")};
    border-radius: 5px;
  }
`;

export default Wrapper;
