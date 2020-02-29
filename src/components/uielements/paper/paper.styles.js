import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  .secondWrapper{    
    width: 75vw;
    margin: 5vh 0;
    background-color: ${palette("color", 16)};
    border-radius: 10px;
    box-shadow: 0 2px 4px ${palette("border", 7)};
    @media only screen and (max-width: ${size("LG")}) {
      width: 80vw;
    }
    @media only screen and (max-width: ${size("L")}) {
      width: 95vw;
    }
    @media only screen and (max-width: ${size("M")}) {
      width: 98vw;
    }
    @media only screen and (max-width: ${size("S")}) {
      width: 100vw;
      border-radius: 0;
    }
  }
}
`;

export default Wrapper;
