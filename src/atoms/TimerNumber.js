import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: bold;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 10rem;
`;

const TimerNumber = ({ number }) => {
  return (
    <StyledP>
      {`${number}`.length === 1 ? `0${number}` : `${number}` || 0}
    </StyledP>
  );
};

TimerNumber.defaultProps = {
  number: 0
};

TimerNumber.propTypes = {
  number: PropTypes.number
};

export default TimerNumber;
