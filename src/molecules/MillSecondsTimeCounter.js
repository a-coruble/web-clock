import React from "react";
import PropTypes from "prop-types";

import { StyledSecondsContainer, TimeNumber } from "../atoms";

const MilliSecondsTimeCounter = ({ time }) => {
  return (
    <StyledSecondsContainer>
      <TimeNumber number={time} />
    </StyledSecondsContainer>
  );
};

MilliSecondsTimeCounter.defaultProps = {
  time: 10
};

MilliSecondsTimeCounter.propTypes = {
  time: PropTypes.number
};

export default MilliSecondsTimeCounter;
