import React from "react";
import PropTypes from "prop-types";

import { StopWatchTimeContainer, ResetButton, StartStopButton } from "../atoms";
import {
  HoursTimeCounter,
  MilliSecondsTimeCounter,
  MinutesTimeCounter,
  SecondsTimeCounter
} from "../molecules";
import moment from "moment";

const StopWatchCounter = ({
  onLap,
  onReset,
  onStart,
  onStop,
  running,
  time
}) => {
  return (
    <StopWatchTimeContainer>
      <HoursTimeCounter time={time.hours()} />
      <MinutesTimeCounter time={time.minutes()} />
      <SecondsTimeCounter time={time.seconds()} />
      <MilliSecondsTimeCounter time={Math.round(time.milliseconds() / 10)} />
      <ResetButton onReset={onReset} />
      <StartStopButton onStart={onStart} onStop={onStop} running={running} />
    </StopWatchTimeContainer>
  );
};

StopWatchCounter.defaultProps = {
  onLap: () => {},
  laps: [],
  onStart: () => {},
  onStop: () => {},
  onReset: () => {},
  running: false,
  time: moment.duration()
};

StopWatchCounter.propTypes = {
  onLap: PropTypes.func,
  laps: PropTypes.arrayOf(PropTypes.instanceOf(moment.duration)),
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onReset: PropTypes.func,
  running: PropTypes.bool,
  time: PropTypes.object
};

export default StopWatchCounter;
