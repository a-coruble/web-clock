import React from "react";
import styled from "styled-components";

interface TimeNumberProps {
  time: number;
}

const StyledP = styled.p`
  font-weight: bold;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 10rem;
`;

const TimeNumber = ({ time }: TimeNumberProps) => {
  return (
    <StyledP>
      {`${time}`.length === 1
        ? `0${time}`
        : `${time}`.length > 2
        ? `${time}`.substr(0, 2)
        : `${time}` || `00`}
    </StyledP>
  );
};

export default TimeNumber;
