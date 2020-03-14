import React from "react";
import PropTypes from "prop-types";

import { MinutesContainer, TimeNumber } from "../atoms";

const MinutesTimeCounter = ({ time }) => {
  return (
    <MinutesContainer>
      <TimeNumber time={time} />
    </MinutesContainer>
  );
};

MinutesTimeCounter.defaultProps = {
  time: 10
};

MinutesTimeCounter.propTypes = {
  time: PropTypes.number
};

export default MinutesTimeCounter;
