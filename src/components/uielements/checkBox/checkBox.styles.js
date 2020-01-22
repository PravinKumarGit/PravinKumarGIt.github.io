import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .checkBox-Component {
    display: grid;
    color: ${palette("color", 17)};
    font-size: ${size("p2")};
    line-height: 16px;
    grid-template-columns: 30px 1fr;
  }

  .required {
    color: ${palette("error", 3)};
    border: 1px solid ${palette("error", 3)};
  }

  .checkBox-InformationContainer {
    text-align: left;
  }

  .checkBox-InformationContainer:hover {
    cursor: pointer;
  }

  .checkBox-Label {
    margin-right: 3px;
    float: left;
    font-weight: bold;
  }
  .checkBox-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 17)};
    font-weight: 700;
  }
`;

export default Wrapper;
