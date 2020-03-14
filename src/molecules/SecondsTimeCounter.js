import React from "react";
import PropTypes from "prop-types";

import { StyledSecondsContainer, TimeNumber } from "../atoms";

const SecondsTimeCounter = ({ time }) => {
  return (
    <StyledSecondsContainer>
      <TimeNumber number={time} />
    </StyledSecondsContainer>
  );
};

SecondsTimeCounter.defaultProps = {
  time: 10
};

SecondsTimeCounter.propTypes = {
  time: PropTypes.number
};

export default SecondsTimeCounter;
