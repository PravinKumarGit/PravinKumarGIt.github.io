import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .modal-Container {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 103%
    height: 100vh;
    overflow: auto;
    background-color: ${palette("color", 21)};
    background-color: ${palette("grayscale", 12)};
  }
  .small{
    width: 500px;
  }
  .medium{
    width: 60%;
  }
  .large{
    width: 90%;
  }
  .modal-Content {
    position: relative;
    background-color: ${palette("color", 16)};
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 50px;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 ${palette("grayscale", 12)},
      0 6px 20px 0 ${palette("grayscale", 12)};
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 9px;
    @media only screen and (max-width: ${size("M")}) {
      width: 99%;
    }
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  .modal-Header {
    display: flex;
    align-items: center;
    justify-content: left;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${palette("color", 15)};
    color: ${palette("color", 16)};
    padding: 13px 20px;
  }

  .modal-Title {
    width: 95%;
    text-align: left;
    font-size: calc(10px + 2vmin);
    display: flex;
    align-items: center;
  }

  .modal-Body {
    padding: 2px 16px;
    color: ${palette("color", 17)};
  }

  .modal-Footer {
    display: flex;
    justify-content: center;
    padding: 2px 16px;
    background-color: ${palette("color", 16)};
    color: black;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .modal-Close-Icon {
    align-self: flex-end;
    color: ${palette("color", 16)};
    float: right;
    font-size: 24px;
    font-weight: bold;
  }

  .modal-Close-Icon:hover,
  .modal-Close-Icon:focus {
    color: ${palette("color", 21)};
    cursor: pointer;
  }

  .cancelBtn {
    display: inherit;
  }

  .submitBtn {
    display: inherit;
  }
`;

export default Wrapper;
