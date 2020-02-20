import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .filePicker {
    display: flex;
    margin: 10px 30px;
    height: 125px;
    flex-direction: column;
    position: relative;
  }
  .filePicker-Label-Container {
    display: flex;
    width: fit-content;
  }
  .filePicker-Label {
    display: inline-flex;
    padding-left: 3px;
    padding-bottom: 7px;
    color: ${palette("grayscale", 17)};
    font-weight: 700;
    font-size: ${size("p2")};
  }
  .filePicker-Label-Optional {
    padding-left: 6px;
    font-size: ${size("p3")};
    color: ${palette("grayscale", 15)};
    font-weight: 700;
  }
  .message {
    padding-left: 1px;
    color: ${palette("color", 18)};
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

  .fileUpload-Container{
    width: 142px;
    border-radius: 6px;
    border: dotted 2px #dddddd;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  input[type='file'] {
    display: none;
   }
 .maxFileSize-Label{
   font-size: ${size("p3")};
  }
.selectedFile-Label{
  color: rgb(148,200,64);
  font-size: ${size("p3")};
}
`;

export default Wrapper;

