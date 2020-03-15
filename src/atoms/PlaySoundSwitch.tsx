import React from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

interface PlaySoundSwitchProps {
  checked: boolean;
  onClick?: () => void;
}

const StyledSwitchContainer = styled.div`
  align-items: center;
  align-self: center;
  background-color: #ffffff10;
  border-radius: 8%;
  display: flex;
  flex-direction: column;
  grid-area: space;
  justify-content: center;
  justify-self: center;
  color: white;
  padding: 0.5rem;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-weight: bold;
`;

const PlaySoundSwitch = ({ checked, onClick }: PlaySoundSwitchProps) => {
  return (
    <StyledSwitchContainer>
      <Switch checked={checked} onClick={onClick} />
      Play sound at end
    </StyledSwitchContainer>
  );
};

export default PlaySoundSwitch;
