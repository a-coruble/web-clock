import React from "react";
import styled, { css } from "styled-components";
import { FaMinus } from "react-icons/fa";

interface StyledSubtractMinuteButtonProps {
  running: boolean;
}

interface SubtractMinuteButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledSubtractMinuteButton = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: subtractMinute;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledSubtractMinuteButtonProps) =>
    running ? 0.6 : 1};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledSubtractMinuteButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const SubtractMinuteButton = ({
  running = false,
  onClick
}: SubtractMinuteButtonProps) => {
  return (
    <StyledSubtractMinuteButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaMinus color="white" />
    </StyledSubtractMinuteButton>
  );
};

export default SubtractMinuteButton;
