import React from "react";
import styled from "styled-components";
import moment from "moment";

interface LapsListProps {
  laps: moment.Duration[];
}

const StyledLapsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  height: 100px;
  background-color: #ffffff11;
  border-radius: 8px;
`;

const StyledLapItem = styled.p`
  color: white;
  margin: 0.2rem;
`;

const LapsList = ({ laps }: LapsListProps) => {
  return (
    <StyledLapsListContainer>
      {laps.map(lap => {
        const hours =
          `${lap.hours()}`.length === 1 ? `0${lap.hours()}` : `${lap.hours()}`;
        const minutes =
          `${lap.minutes()}`.length === 1
            ? `0${lap.minutes()}`
            : `${lap.minutes()}`;
        const seconds =
          `${lap.seconds()}`.length === 1
            ? `0${lap.seconds()}`
            : `${lap.seconds()}`;
        const milliseconds =
          `${lap.milliseconds()}`.length === 1
            ? `0${lap.milliseconds()}`
            : `${lap.milliseconds()}`;
        return (
          <StyledLapItem>
            {hours}:{minutes}:{seconds}:{milliseconds}
          </StyledLapItem>
        );
      })}
    </StyledLapsListContainer>
  );
};

export default LapsList;
