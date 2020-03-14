import React from "react";
import PropTypes from "prop-types";

import { TimerContainer } from "../atoms";
import {
  HoursTimeCounter,
  MinutesTimeCounter,
  SecondsTimeCounter
} from "../molecules";
import moment from "moment";

const TimerCounter = ({ time }) => {
  return (
    <TimerContainer>
      <HoursTimeCounter time={time.hours()} />
      <MinutesTimeCounter time={time.minutes()} />
      <SecondsTimeCounter time={time.seconds()} />
    </TimerContainer>
  );
};

TimerCounter.defaultProps = {
  time: moment.duration({ minutes: 10 }),
  showMilliseconds: false
};

TimerCounter.propTypes = {
  time: PropTypes.instanceOf(moment.duration),
  showMilliseconds: PropTypes.bool
};

export default TimerCounter;
