import React from "react";
import moment from "moment";

import { StopWatchTimeContainer, ResetButton, StartStopButton } from "../atoms";
import {
  HoursTimeCounter,
  MilliSecondsTimeCounter,
  MinutesTimeCounter,
  SecondsTimeCounter,
  LapDisplayContainer
} from "../molecules";

interface StopWatchLayoutProps {
  time: moment.Duration;
  onReset?: () => void;
  onStart?: () => void;
  onStop?: () => void;
  onLap?: () => void;
  running: boolean;
  laps: moment.Duration[];
}

const StopWatchLayout = ({
  time,
  onReset,
  onStart,
  onStop,
  onLap,
  laps,
  running
}: StopWatchLayoutProps) => {
  return (
    <StopWatchTimeContainer>
      <HoursTimeCounter time={time.hours()} />
      <MinutesTimeCounter time={time.minutes()} />
      <SecondsTimeCounter time={time.seconds()} />
      <MilliSecondsTimeCounter time={Math.round(time.milliseconds() / 10)} />
      <ResetButton onReset={onReset} />
      <StartStopButton onStart={onStart} onStop={onStop} running={running} />
      <LapDisplayContainer onLap={onLap} laps={laps} />
    </StopWatchTimeContainer>
  );
};

export default StopWatchLayout;
