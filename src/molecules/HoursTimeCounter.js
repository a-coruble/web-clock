import React from "react";
import PropTypes from "prop-types";

import { HoursContainer, TimeNumber } from "../atoms";

const HoursTimeCounter = ({ time }) => {
  return (
    <HoursContainer>
      <TimeNumber number={time} />
    </HoursContainer>
  );
};

HoursTimeCounter.defaultProps = {
  time: 10
};

HoursTimeCounter.propTypes = {
  time: PropTypes.number
};

export default HoursTimeCounter;
