import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, ${palette("color", 25)} 0%, ${palette("color", 16)} 100%);
  overflow: hidden;
`;

export default Wrapper;
