import React from "react";
import styled, { css } from "styled-components";
import { LinkProps } from "react-router-dom";

import { NavigationLink } from "../atoms";

interface MenuItemProps extends LinkProps {
  active?: boolean;
}

interface StyledMenuItemProps {
  active: boolean;
}

const StyledMenuItem = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  ${({ active }: StyledMenuItemProps) =>
    active &&
    css`
      background-color: #ffffff20;
    `}
`;

const MenuItem = ({ active = false, ...props }: MenuItemProps) => {
  return (
    <StyledMenuItem active={active}>
      <NavigationLink {...props} />
    </StyledMenuItem>
  );
};

export default MenuItem;
