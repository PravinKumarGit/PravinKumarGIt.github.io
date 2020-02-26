import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  min-height: 50px;
  display:flex
  .bullet {
    
  }
  .marker {
    height: 25px;
    width: 25px;
    background-color: ${palette("color", 15)};
    color: ${palette("color", 16)};
    border-radius: 50%;
    display: inline-block;
    text-align: center;
  }
  .content {
    
  }
  .padding {
    padding-right: 20px
  }
`;

export default Wrapper;
