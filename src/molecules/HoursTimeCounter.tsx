import React from "react";

import { HoursContainer, TimeNumber } from "../atoms";

interface HoursTimeCounterProps {
  time: number;
}

const HoursTimeCounter = ({ time }: HoursTimeCounterProps) => {
  return (
    <HoursContainer>
      <TimeNumber time={time} />
    </HoursContainer>
  );
};

export default HoursTimeCounter;
