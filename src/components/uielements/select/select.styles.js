import styled from "styled-components";

const Wrapper = styled.div`
  .select-Component {
    display: inline-block;
    margin: 10px;
    max-width: 290px;
    min-height: 80px;
  }
  .select-Label {
    display: flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: grey;
    font-weight: 700;
    font-size: 13px;
  }
  .select-Select {
    display: flex;
    border: 1px solid rgba(148, 200, 64, 0.3);
    border-radius: 5px;
    margin: 0 !important;
    padding-left: 7px;
    padding-right: 2px;
    overflow: hidden;
    width: 288px;
    height: 32px;
    color: #94c840;
    fill: #94c840;
  }
  .select-Select * {
    border: none;
    font-size: 15px;
  }
  .select-loader {
    display: flex;
    width: 288px;
    height: 32px;
    background-color: #d3d3d3;
    opacity: 0.5;
    border-radius: 5px;
  }
  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }
  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  .select-spinner-icon {
    display: block;
    height: inherit;
    margin-left: auto;
    margin-right: auto;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    color: white;
  }

  .toolTip-Icon {
    float: left;
    text-decoration: none;
    position: relative;
    height: 15px;
    width: 15px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    font-size: 11px;
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
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 1px 2px #8888886e;
  }
  .textBox-Label-Optional {
    padding-left: 6px;
    font-size: 12px;
    color: #aaa;
    font-weight: 700;
  }
  .select-Select:focus-within {
    outline: none;
  }
  .required:focus-within {
    box-shadow: 0 0 6px #fb5708;
    outline: none;
  }
  .required {
    border: 1px solid red !important;
  }
  .message {
    display: flex;
    position: absolute;
    padding-left: 3px;
    margin-top: 2px;
    margin-bottom: 0;
    color: #fb5708;
    font-size: 13px;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
