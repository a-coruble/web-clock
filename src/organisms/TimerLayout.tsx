import React from "react";
import styled from "styled-components";
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
import { PlaySoundSwitch, ResetButton, StartStopButton } from "../atoms";

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

const StyledContainer = styled.div`
  grid-area: center;
  display: grid;
  grid-template-areas:
    "addHour addMinute addSecond"
    "hours minutes seconds"
    "subtractHour subtractMinute subtractSecond"
    "reset space startStop";
  grid-template-rows: 0.5fr 1fr 0.5fr 0.5fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "subtractHour hours addHour"
      "subtractMinute minutes addMinute"
      "subtractSecond seconds addSecond"
      "reset space startStop";
    grid-template-rows: repeat(4, 0.5fr);
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-gap: 1rem;
  }
  max-height: 100vh;
  user-select: none;
`;

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
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default TimerLayout;
