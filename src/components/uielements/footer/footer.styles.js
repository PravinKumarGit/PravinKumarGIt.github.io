import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`
  .Footer-Container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    border-top: 1px solid ${palette('footer',0)};
    background-color: ${palette('footer',1)};
    color: ${palette('footer',2)};
    font-size: 12px;
    align-items: center;
  }
  .ApprovalText {
    margin-top: 10px;
    text-align: center;
  }
`;

export default Wrapper;
