import React from "react";
import styled from "styled-components";

interface StyledStartStopButtonProps {
  running: boolean;
}

interface StartStopButtonProps {
  running?: boolean;
  onStart?: () => void;
  onStop?: () => void;
}

const StyledStartStopButton = styled.div`
  align-items: center;
  align-self: center;
  background-color: ${({ running }: StyledStartStopButtonProps) =>
    running ? "darkred" : "darkgreen"};
  border-radius: 50%;
  color: white;
  display: flex;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
  grid-area: startStop;
  height: 6.25rem;
  justify-content: center;
  justify-self: center;
  transition: transform 0.2s;
  width: 6.25rem;
  :hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    font-size: 1.2rem;
    height: 4rem;
    width: 4rem;
    margin-top: 1.5rem;
  }
`;

const StartStopButton = ({
  onStart,
  onStop,
  running = false
}: StartStopButtonProps) => {
  return (
    <StyledStartStopButton
      onClick={running ? onStop : onStart}
      running={running}
    >
      {running ? "Stop" : "Start"}
    </StyledStartStopButton>
  );
};
export default StartStopButton;
