import React from "react";
import styled, { css } from "styled-components";
import { FaMinus } from "react-icons/fa";

interface StyledSubtractHourButtonProps {
  running: boolean;
}

interface SubtractHourButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledSubtractHourButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: subtractHour;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledSubtractHourButtonProps) =>
    running ? 0.6 : 1};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledSubtractHourButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const SubtractHourButton = ({
  running = false,
  onClick
}: SubtractHourButtonProps) => {
  return (
    <StyledSubtractHourButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaMinus color="white" />
    </StyledSubtractHourButton>
  );
};

export default SubtractHourButton;
