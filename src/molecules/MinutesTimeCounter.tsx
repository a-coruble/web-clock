import React from "react";

import { MinutesContainer, TimeNumber } from "../atoms";

interface MinutesTimeCounterProps {
  time: number;
}

const MinutesTimeCounter = ({ time }: MinutesTimeCounterProps) => {
  return (
    <MinutesContainer>
      <TimeNumber time={time} />
    </MinutesContainer>
  );
};

export default MinutesTimeCounter;
