import styled from "styled-components";
import { palette, size } from "styled-theme";

const Wrapper = styled.div`
  .filePicker {
    display: flex;
    margin: 5px 0px;
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
    font-weight: 400;
    font-size: ${size("p2")};
  }

  .message {
    padding-left: 1px;
    color: ${palette("color", 18)};
    font-size: ${size("p2")};
  }

  .fileUpload-Container{
    border-radius: 5px;
    border: 1px solid ${palette("border", 5)};
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 5px;;
    align-items: center;
    background: ${palette("grayscale", 16)} ;
    margin-bottom: 5px;
  }
 .maxFileSize-Label{
   font-size: ${size("p3")};
  }
.selectedFile-Label{
  color: ${palette("color", 14)};
  font-weight: 400;
  font-size: ${size("p2")};
  width: fit-content;
}


.selectedFile-Label span {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 50%;
}

.selectedFile-Label span:hover {
  background-color: ${palette("color", 14)};
  border: none;
  color:  ${ palette("color", 16)};
}

.fileDetails-Container{
  display: flex;
  flex-direction: column;
  margin: 3px;
}
.fileDetails{
  display: flex;
  justify-content: space-between;
  color: ${palette("grayscale", 17)};
  font-weight: 700;
}
.file-format{
  margin: 0px 18px 9px 3px;
  font-size: ${size("p3")};
}

.fileUpload-Container button{
  color: ${ palette("color", 16)};
  background-color:${ palette("color", 22)};
  border-radius: 5px;
  padding: 0px 15px;
  margin-right: 5px;
  height: 36px;
  font-size: ${size("p1")};
  border: none;
}
.fileUpload-Container:hover button{
  cursor: pointer;
}
`;

export default Wrapper;

