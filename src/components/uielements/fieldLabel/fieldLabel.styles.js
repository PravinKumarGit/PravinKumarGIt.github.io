import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
.select-Label {
  display: flex;
  padding-left: 3px;
  padding-bottom: 7px;
  color: ${palette("color", 14)};
  font-weight: 400;
  font-size: ${size("p2")};
}
.toolTip-Icon {
  float: left;
  text-decoration: none;
  position: relative;
  height: 15px;
  width: 15px;
  cursor: pointer;
  color: ${palette("color", 16)};
  border-radius: 10px;
  font-size: ${size("p4")};
  margin-left: 5px;
}

.toolTip-Icon span {
  display: none;
}

.toolTip-Icon:hover span {
  display: block;
  position: absolute;
  overflow: hidden;
  bottom: 20px;
}
.toolTip-Text {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 5px;
  width: 200px;
  color: gray;
  background-color: ${palette("color", 16)};
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 2px ${palette("grayscale", 12)};
}
.textBox-Label-Optional {
  padding-left: 6px;
  font-size: ${size("p3")};
  color: ${palette("grayscale", 15)};
  font-weight: 700;
}

`;

export default Wrapper;
