import React from "react";
import PropTypes from "prop-types";

import { MilliSecondsContainer, TimeContainer } from "../atoms";
import {
  HoursTimeCounter,
  MinutesTimeCounter,
  SecondsTimeCounter,
  MilliSecondsTimeCounter
} from "../molecules";
import moment from "moment";

const TimeCounter = ({ time, showMilliseconds }) => {
  const Container = showMilliseconds ? MilliSecondsContainer : TimeContainer;
  return (
    <Container>
      <HoursTimeCounter time={time.hours()} />
      <MinutesTimeCounter time={time.minutes()} />
      <SecondsTimeCounter time={time.seconds()} />
      {showMilliseconds && (
        <MilliSecondsTimeCounter time={time.milliseconds()} />
      )}
    </Container>
  );
};

TimeCounter.defaultProps = {
  time: moment.duration({ minutes: 10 }),
  showMilliseconds: false
};

TimeCounter.propTypes = {
  time: PropTypes.instanceOf(moment.duration),
  showMilliseconds: PropTypes.bool
};

export default TimeCounter;
