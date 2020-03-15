import React from "react";
import moment from "moment";

import {
  AddHourButton,
  AddMinuteButton,
  AddSecondButton,
  SubtractHourButton,
  SubtractMinuteButton,
  SubtractSecondButton
} from "../atoms/addSubtractButtons";
import {
  HoursTimeCounter,
  MinutesTimeCounter,
  SecondsTimeCounter
} from "../molecules";
import {
  PlaySoundSwitch,
  ResetButton,
  StartStopButton,
  TimerContainer
} from "../atoms";

interface TimerLayoutProps {
  addHour?: () => void;
  addMinute?: () => void;
  addSecond?: () => void;
  subtractHour?: () => void;
  subtractMinute?: () => void;
  subtractSecond?: () => void;
  time: moment.Duration;
  autoPlayEnabled?: boolean;
  playSound?: boolean;
  onSwitch?: () => void;
  onReset?: () => void;
  onStart?: () => void;
  onStop?: () => void;
  running: boolean;
}

const TimerLayout = ({
  addHour,
  addMinute,
  addSecond,
  subtractHour,
  subtractMinute,
  subtractSecond,
  time,
  autoPlayEnabled = false,
  playSound = false,
  onSwitch,
  onReset,
  onStart,
  onStop,
  running
}: TimerLayoutProps) => {
  return (
    <TimerContainer>
      <AddHourButton onClick={addHour} running={running} />
      <AddMinuteButton onClick={addMinute} running={running} />
      <AddSecondButton onClick={addSecond} running={running} />
      <HoursTimeCounter time={time.hours()} />
      <MinutesTimeCounter time={time.minutes()} />
      <SecondsTimeCounter time={time.seconds()} />
      <SubtractHourButton onClick={subtractHour} running={running} />
      <SubtractMinuteButton onClick={subtractMinute} running={running} />
      <SubtractSecondButton onClick={subtractSecond} running={running} />
      <ResetButton onReset={onReset} />
      {autoPlayEnabled && (
        <PlaySoundSwitch checked={playSound} onClick={onSwitch} />
      )}
      <StartStopButton onStart={onStart} onStop={onStop} running={running} />
    </TimerContainer>
  );
};

export default TimerLayout;
