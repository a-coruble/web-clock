import React from "react";
import styled from "styled-components";
import moment from "moment";

import LapButton from "../atoms/LapButton";
import LapsList from "./LapsList";

interface LapDisplayContainerProps {
  onLap?: () => void;
  laps: moment.Duration[];
}

const StyledLapDisplayContainer = styled.div`
  display: grid;
  grid-area: lapsContainer;
  grid-template-areas:
    "lapButton"
    "lapsList";
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
`;

const LapDisplayContainer = ({ onLap, laps }: LapDisplayContainerProps) => {
  return (
    <StyledLapDisplayContainer>
      <LapButton onLap={onLap} />
      <LapsList laps={laps} />
    </StyledLapDisplayContainer>
  );
};

export default LapDisplayContainer;
