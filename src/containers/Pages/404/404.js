import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../theme/assets/rob.png';
import FourZeroFourStyleWrapper from './404.styles';

export default function() {
  return (
    <FourZeroFourStyleWrapper className="iso404Page">
      <div className="iso404Content">
        <h1>
          404 Page Not Found
        </h1>
        <h3>
        Looks like you got lost
        </h3>
        <p>
        The page youre looking for doesnt exist or has been moved.
        </p>
        <Link to="/dashboard">
          <button type="button">
          BACK HOME
          </button>
        </Link>
      </div>

      <div className="iso404Artwork">
        <img alt="#" src={Image} />
      </div>
    </FourZeroFourStyleWrapper>
  );
}
