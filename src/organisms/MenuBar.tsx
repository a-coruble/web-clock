import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { MenuItem } from "../molecules";

const StyledGridContainer = styled.header`
  grid-area: menu;
`;

const StyledMenuBar = styled.div`
  background-color: #ffffff11;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  font-weight: bold;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 2rem;
`;

const MenuBar = () => {
  const location = useLocation();
  return (
    <StyledGridContainer>
      <StyledMenuBar>
        <MenuItem to="/" active={location.pathname === "/"}>
          Timer
        </MenuItem>
        <MenuItem to="/stopwatch" active={location.pathname === "/stopwatch"}>
          Stopwatch
        </MenuItem>
      </StyledMenuBar>
    </StyledGridContainer>
  );
};

export default MenuBar;
