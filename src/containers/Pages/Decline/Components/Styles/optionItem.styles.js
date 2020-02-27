import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  min-height: 50px;
  .option-item {
    display: flex;
  }
  .option-item-marker {
    height: 36px;
    width: 36px;
    background-color: ${palette("color", 25)};
    color: ${palette("color", 16)};
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 24px;
  }
  .option-item-padding {
    padding-right: 20px;
  }
`;

export default Wrapper;
