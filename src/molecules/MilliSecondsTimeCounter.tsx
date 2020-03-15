import React from "react";

import { MilliSecondsContainer, TimeNumber } from "../atoms";

interface MilliSecondsTimeCounterProps {
  time: number;
}

const MilliSecondsTimeCounter = ({ time }: MilliSecondsTimeCounterProps) => {
  return (
    <MilliSecondsContainer>
      <TimeNumber time={time} />
    </MilliSecondsContainer>
  );
};

export default MilliSecondsTimeCounter;
