import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: bold;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 10rem;
`;

const TimeNumber = ({ time }) => {
  return (
    <StyledP>{`${time}`.length === 1 ? `0${time}` : `${time}` || 0}</StyledP>
  );
};

TimeNumber.defaultProps = {
  time: 0
};

TimeNumber.propTypes = {
  time: PropTypes.number
};

export default TimeNumber;
