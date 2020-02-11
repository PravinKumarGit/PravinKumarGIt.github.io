import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  background-color: ${palette("grayscale", 14)};
  overflow: hidden;
  .verifyBankDetails-Container {
    display: flex;
    border-radius: 5px;
    font-size: 13px;
    justify-content: center;
  }

  #fgf-bank-frame {
    padding: 5px;
    border: none;
    width: 80%;
    height: 500px;
    overflow-x: hidden;
    background-color: rgba(228,228,228,0.815);
    border-radius: 5px;
  }
`;

export default Wrapper;
