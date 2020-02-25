import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .Header-Container {
    display: block;
    height: 50px;
    background: ${palette("header", 0)};
    color: ${palette("header", 2)};
  }
  .logos {
    display: flex;
    float: left;
    height: 100%;
    margin-left: 10vw;
  }
  .logoBox {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    align-self: center;
  }
  .logoBox img {
    display: inherit;
    height: 45px;
  }
  .header-PhoneNumber {
    display: flex;
    height: 100%;
    margin-right: 10vw;
    float: right;
    align-items: center;
    color: ${palette("header", 3)};
    font-size: ${size("p1")};
    letter-spacing: 1px;
    font-weight: 700;
    text-decoration: none;
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }
  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }
`;

export default Wrapper;
