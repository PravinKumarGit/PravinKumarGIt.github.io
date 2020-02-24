import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
 .contactBox{
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: flex-start;
 }

 .contactDetails{
  color: ${palette("grayscale", 17)};
  font-weight: 700;
  text-decoration:none;
 }
`;

export default Wrapper;
