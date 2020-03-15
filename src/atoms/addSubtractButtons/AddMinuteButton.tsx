import React from "react";
import styled, { css } from "styled-components";
import { FaPlus } from "react-icons/fa";

interface StyledAddMinuteButtonProps {
  running: boolean;
}

interface AddMinuteButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledAddMinuteButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addMinute;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledAddMinuteButtonProps) => (running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledAddMinuteButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const AddMinuteButton = ({
  running = false,
  onClick
}: AddMinuteButtonProps) => {
  return (
    <StyledAddMinuteButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaPlus color="white" />
    </StyledAddMinuteButton>
  );
};

export default AddMinuteButton;
