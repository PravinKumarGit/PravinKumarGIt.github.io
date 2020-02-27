import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .applicationBreadCrumb-Container {
    display: flex;
    height: 120px;
    background-color: ${palette("breadCrumHeader", 2)};
    font-size: ${size("p2")};
  }
  .breadCrumbBox {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 5;
  }
  .line {
    min-width: 173px;
    height: 12px;
    background-color: ${palette("breadCrumHeader", 4)};
    position: absolute;
    align-self: center;
    z-index: -5;
    right: 10px;
  }
  .line-inactive {
    min-width: 173px;
    height: 10px;
    background-color: ${palette("breadCrumHeader", 4)};
    position: absolute;
    align-self: center;
    z-index: -5;
    right: 1px;
  }
  .line-active {
    min-width: 173px;
    height: 6px;
    background-color: ${palette("breadCrumHeader", 3)};
    position: absolute;
    align-self: center;
    right: 10px;
  }
  .breadCrumb-title-and-button {
    display: flex;
    align-self: center;
    margin: 0 68px;
    position: relative;
  }

  .section-active {
    width: 20px;
    height: 20px;
    background-color: ${palette("breadCrumHeader", 0)};
    border: 8px solid ${palette("breadCrumHeader", 4)};
    border-radius: 90px;
  }
  .section-active,
  .section-inactive {
    margin-left: auto;
    margin-right: auto;
  }
  .breadCrumb-title {
    justify-self: center;
    align-self: center;
    justify-content: center;
    position: absolute;
    width: 150px;
    left: -61px;
    text-align: center;
  }
  .active {
    color: ${palette("breadCrumHeader", 0)};
    bottom: 40px;
  }
  .inactive {
    color: ${palette("breadCrumHeader", 1)};
    bottom: 40px;
  }
  .section-inactive {
    width: 28px;
    height: 28px;
    background-color: ${palette("breadCrumHeader", 4)};
    border-radius: 90px;
  }
  .section-active,
  .section-inactive {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: ${size("M")}) {
    .line,
    .line-active,
    .line-inactive {
      min-width: 120px;
    }
    .breadCrumb-title-and-button {
      margin: 0 40px;
    }
  }
  @media only screen and (max-width: ${size("S")}) {
    .line,
    .line-active,
    .line-inactive {
      min-width: 90px;
    }
    .breadCrumb-title-and-button {
      margin: 0px 21px;
    }
    .breadCrumb-title {
      width: 50px;
      left: -8px;
      font-size: ${size("p3")};
    }
  }
`;

export default Wrapper;
