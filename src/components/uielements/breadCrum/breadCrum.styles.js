import styled from "styled-components";

const Wrapper = styled.div`
  .applicationBreadCrumb-Container {
    display: flex;
    max-height: 120px;
    min-height: 120px;
    min-width: 850px;
    background-color: #00673f;
    font-size: small;
  }
  .breadCrumbBox {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    z-index: 5;
  }
  .line {
    width: 450px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    align-self: center;
    z-index: -5;
    margin-top: 8px;
  }
  .breadCrumb-title-and-button {
    display: block;
    align-self: center;
    margin-left: 50px;
    margin-right: 30px;
  }
  .breadCrumb-title-active {
    color: #fff;
  }
  .section-active {
    width: 20px;
    height: 20px;
    background-color: #7bb840;
    border: 8px solid #fff;
    border-radius: 90px;
  }
  .section-active,
  .section-inactive {
    margin-left: auto;
    margin-right: auto;
  }
  .breadCrumb-title-inactive {
    color: #7bb840;
    justify-self: center;
    align-self: center;
    justify-content: center;
  }
  .section-inactive {
    width: 28px;
    height: 28px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 90px;
  }
  .section-active,
  .section-inactive {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Wrapper;
