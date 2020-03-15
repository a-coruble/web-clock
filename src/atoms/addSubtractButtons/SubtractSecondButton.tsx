import React from "react";
import styled, { css } from "styled-components";
import { FaMinus } from "react-icons/fa";

interface StyledSubtractSecondButtonProps {
  running: boolean;
}

interface SubtractSecondButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledSubtractSecondButton = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: subtractSecond;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledSubtractSecondButtonProps) =>
    running ? 0.6 : 1};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledSubtractSecondButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const SubtractSecondButton = ({
  running = false,
  onClick
}: SubtractSecondButtonProps) => {
  return (
    <StyledSubtractSecondButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaMinus color="white" />
    </StyledSubtractSecondButton>
  );
};

export default SubtractSecondButton;
