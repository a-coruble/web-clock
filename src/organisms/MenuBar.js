import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledGridContainer = styled.header`
  grid-area: menu;
`;

const StyledContainer = styled.div`
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

const StyledMenuItem = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  ${props =>
    props.active &&
    css`
      background-color: #ffffff20;
    `}
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const MenuBar = () => {
  const location = useLocation();
  return (
    <StyledGridContainer>
      <StyledContainer>
        <StyledMenuItem active={location.pathname === "/"}>
          <StyledLink to="/">Timer</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem active={location.pathname === "/stopwatch"}>
          <StyledLink to="/stopwatch">Stopwatch</StyledLink>
        </StyledMenuItem>
      </StyledContainer>
    </StyledGridContainer>
  );
};

export default MenuBar;
