import React from "react";
import styled, { css } from "styled-components";
import { FaPlus } from "react-icons/fa";

interface StyledAddSecondButtonProps {
  running: boolean;
}

interface AddSecondButtonProps {
  running?: boolean;
  onClick?: () => void;
}

const StyledAddSecondButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addSecond;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${({ running }: StyledAddSecondButtonProps) => (running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${({ running }: StyledAddSecondButtonProps) =>
    !running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const AddSecondButton = ({
  running = false,
  onClick
}: AddSecondButtonProps) => {
  return (
    <StyledAddSecondButton
      running={running}
      onClick={running ? () => {} : onClick}
    >
      <FaPlus color="white" />
    </StyledAddSecondButton>
  );
};

export default AddSecondButton;
