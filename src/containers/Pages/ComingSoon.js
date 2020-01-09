import React from "react";
import Countdown from "react-count-down";
import Image from "../../theme/assets/rob.png";
import FourZeroFourStyleWrapper from "./404/404.styles";

export default function() {
  const options = {
    endDate: "03/01/2020 10:55 AM",
    prefix: "until my birthday!"
  };

  return (
    <FourZeroFourStyleWrapper className="iso404Page">
      <div className="iso404Content">
        <h1>Thank you for checking out our app.</h1>
        <p>
          It’s not quite ready yet, but we are working hard and it will be ready
          in approximately:
        </p>
        <Countdown options={options} />
      </div>
      <div className="iso404Artwork">
        <img alt="#" src={Image} />
      </div>
    </FourZeroFourStyleWrapper>
  );
}
