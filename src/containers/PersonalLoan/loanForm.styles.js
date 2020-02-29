import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .verifyBankDetails-Container {
    display: flex;
    border-radius: 5px;
    font-size: ${size("p2")};
    justify-content: center;
    margin-top: 20px;
    position: relative;
    flex-direction: column;
    align-items: center;
  }

  #fgf-bank-frame {
    padding: 5px;
    border: none;
    width: 80%;
    height: 500px;
    overflow-x: hidden;
    background-color: ${palette("grayscale", 19)};
    border-radius: 5px;
  }
  .label {
    margin-right: 3px;
    font-weight: 700;
  }
  .left-align {
    display: flex;
    text-align: left;
    flex-direction: row;
  }
  .content-wrapper {
    margin: 30px 100px;
    @media only screen and (max-width: ${size("LG")}) {
      margin: 30px 50px;
    }
    @media only screen and (max-width: ${size("L")}) {
      margin: 30px 20px;
    }
    @media only screen and (max-width: ${size("M")}) {
      margin: 30px 10px;
    }
    @media only screen and (max-width: ${size("S")}) {
      margin: 30px 5px;
    }
  }

  .next-buton-container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default Wrapper;
