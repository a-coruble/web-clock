import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: bold;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 10rem;
`;

const TimeNumber = ({ number }) => {
  return (
    <StyledP>
      {`${number}`.length === 1 ? `0${number}` : `${number}` || 0}
    </StyledP>
  );
};

TimeNumber.defaultProps = {
  number: 0
};

TimeNumber.propTypes = {
  number: PropTypes.number
};

export default TimeNumber;
