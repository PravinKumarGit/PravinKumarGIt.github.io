import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .UserInputBlock-Container {
    display: grid;
    padding: 10px 0;
    margin: 30px 0 20px;
    align-content: center;
    text-align: center;
    // background-color: ${palette("accordian", 0)};
    color: ${palette("accordian", 1)};
  }
  .UserInputBlock-Label {
    display: grid;
    grid-template-columns: 1fr 40px;
    align-content: center;
    height: 40px;
    font-size: ${size("h5")};
    cursor: pointer;
    background: linear-gradient(
      270deg,
      ${palette("accordian", 0)} 0,
      ${palette("accordian", 4)}
    );
  }
  .content-show {
    display: grid;
    align-content: center;
    grid-template-columns: 50% 50%;
    justify-items: legacy;
    padding-left: 4vw;
    grid-template-columns: 100%;
    background-color: ${palette("accordian", 2)};
  }
  .content-hide {
    display: none;
  }
`;

export default Wrapper;
