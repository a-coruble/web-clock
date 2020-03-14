import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: center;
  align-self: center;
  background-color: #ffffff10;
  border-radius: 50%;
  color: white;
  display: flex;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
  grid-area: reset;
  height: 6.25rem;
  justify-content: center;
  justify-self: center;
  transition: transform 0.2s;
  width: 6.25rem;
  :hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    font-size: 1.2rem;
    height: 4rem;
    width: 4rem;
    margin-top: 1.5rem;
  }
`;

const ResetButton = ({ onReset }) => {
  return <StyledContainer onClick={onReset}>Reset</StyledContainer>;
};

ResetButton.defaultProps = {
  onReset: () => {}
};

ResetButton.propTypes = {
  onReset: PropTypes.func
};

export default ResetButton;
