import React from "react";

import { SecondsContainer, TimeNumber } from "../atoms";

interface SecondsTimeCounterProps {
  time: number;
}

const SecondsTimeCounter = ({ time }: SecondsTimeCounterProps) => {
  return (
    <SecondsContainer>
      <TimeNumber time={time} />
    </SecondsContainer>
  );
};

export default SecondsTimeCounter;
