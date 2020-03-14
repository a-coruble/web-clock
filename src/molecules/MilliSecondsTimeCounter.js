import React from "react";
import PropTypes from "prop-types";

import { MilliSecondsContainer, TimeNumber } from "../atoms";

const MilliSecondsTimeCounter = ({ time }) => {
  return (
    <MilliSecondsContainer>
      <TimeNumber time={time} />
    </MilliSecondsContainer>
  );
};

MilliSecondsTimeCounter.defaultProps = {
  time: 0
};

MilliSecondsTimeCounter.propTypes = {
  time: PropTypes.number
};

export default MilliSecondsTimeCounter;
