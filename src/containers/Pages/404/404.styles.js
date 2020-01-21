import styled from "styled-components";
import { palette, size } from "styled-theme";
import { transition, borderRadius } from "../../../utils/helpers/style_utils";

const FourZeroFourStyleWrapper = styled.div`
  width: ${size("fullScreen")};
  height: ${size("windowHeight")};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  .iso404Content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    h1 {
      font-size: ${size("h1")};
      font-weight: 700;
      color: ${palette("secondary", 2)};
      line-height: 1;
      margin: 0 0 25px;
    }

    h3 {
      font-size:  ${size("h3")};
      font-weight: 400;
      color: ${palette("text", 1)};
      margin: 0 0 10px;
      line-height: 1.2;
    }

    p {
      font-size:  ${size("p2")};
      font-weight: 400;
      color: ${palette("text", 3)};
      margin: 0 0 10px;
    }

    button {
      display: inline-block;
      margin-top: 15px;
      margin-bottom: 0;
      font-weight: 500;
      text-align: center;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 0;
      ${palette("color", 16)}-space: nowrap;
      line-height: 1.5;
      padding: 0 30px;
   font-size:  ${size("p2")};
      flex-shrink: 0;
      height: 36px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: relative;
      color: ${palette("color", 16)};
      background-color: ${palette("primary", 0)};
      ${transition()};
      ${borderRadius("18px")};

      a {
        width: 100%;
        height: 100%;
        color: ${palette("color", 16)};
        text-decoration: none;
      }

      &:hover {
        background-color: ${palette("primary", 2)};

        a {
          text-decoration: none;
        }
      }

      &:focus {
        outline: 0;
        box-shadow: none;

        a {
          text-decoration: none;
        }
      }
    }
    @media only screen and (max-width: ${size("M")}) {
      order: 2;
      margin-top: 20px;
      align-items: center;
      text-align: center;
      flex-direction: column;
      h1 {
        font-size: ${size("h3")};
      }
    }
  }

  .iso404Artwork {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    img {
      max-height: ${size("fullScreen")};
    }
  }

  @media only screen and (max-width: ${size("M")}) {
    width: ${size("fullScreen")};
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export default FourZeroFourStyleWrapper;
