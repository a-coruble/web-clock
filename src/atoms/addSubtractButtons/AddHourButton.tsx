import React from "react";
import styled, { css } from "styled-components";
import { FaPlus } from "react-icons/fa";

interface StyledAddHourButtonProps {
  running: boolean;
}

interface AddHourButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledAddHourButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addHour;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledAddHourButtonProps) => (running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledAddHourButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const AddHourButton = ({ running = false, onClick }: AddHourButtonProps) => {
  return (
    <StyledAddHourButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaPlus color="white" />
    </StyledAddHourButton>
  );
};

export default AddHourButton;
