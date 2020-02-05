import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .UserInputBlock-Container {
    display: grid;
    padding: 10px 0;
    margin: 30px 0 20px;
    align-content: center;
    text-align: center;
    background-color: ${palette("color", 16)};
    color: ${palette("color", 16)};
  }
  .UserInputBlock-Label {
    display: grid;
    grid-template-columns: 1fr 40px;
    align-content: center;
    height: 40px;
    font-size: ${size("h5")};
    cursor: pointer;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(0, ${palette("color", 15)}),
      to(${palette("color", 14)})
    );
    background: -webkit-linear-gradient(
      right,
      ${palette("color", 15)},
      ${palette("color", 14)}
    );
    background: linear-gradient(
      270deg,
      ${palette("color", 15)} 0,
      ${palette("color", 14)}
    );
  }
  .content-show {
    display: grid;
    align-content: center;
    grid-template-columns: 50% 50%;
    justify-items: legacy;
    padding-left: 4vw;
    grid-template-columns: 100%;
    background-color: rgb(0, 103, 63);
  }
  .content-hide {
    display: none;
  }
`;

export default Wrapper;
