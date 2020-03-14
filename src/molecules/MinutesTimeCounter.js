import React from "react";
import PropTypes from "prop-types";

import { StyledMinutesContainer, TimeNumber } from "../atoms";

const MinutesTimeCounter = ({ time }) => {
  return (
    <StyledMinutesContainer>
      <TimeNumber number={time} />
    </StyledMinutesContainer>
  );
};

MinutesTimeCounter.defaultProps = {
  time: 10
};

MinutesTimeCounter.propTypes = {
  time: PropTypes.number
};

export default MinutesTimeCounter;
