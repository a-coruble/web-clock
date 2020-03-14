import React from "react";
import PropTypes from "prop-types";

import { SecondsContainer, TimeNumber } from "../atoms";

const SecondsTimeCounter = ({ time }) => {
  return (
    <SecondsContainer>
      <TimeNumber time={time} />
    </SecondsContainer>
  );
};

SecondsTimeCounter.defaultProps = {
  time: 10
};

SecondsTimeCounter.propTypes = {
  time: PropTypes.number
};

export default SecondsTimeCounter;
