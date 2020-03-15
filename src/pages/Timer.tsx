import React from "react";
import { observer, inject } from "mobx-react";
import moment from "moment";

import { TimerStore } from "../stores/TimerStore";
import TimerLayout from "../organisms/TimerLayout";

interface TimerProps {
  timerStore?: TimerStore;
}

const emptyFunction = () => {};

const TimerComponent = ({ timerStore }: TimerProps) => {
  return (
    <TimerLayout
      onStart={timerStore?.start}
      onStop={timerStore?.stop}
      onSwitch={timerStore?.setPlaySound || emptyFunction}
      running={timerStore?.running ?? false}
      time={timerStore?.value ?? moment.duration({ minutes: 5 })}
      addHour={timerStore?.addHour}
      addMinute={timerStore?.addMinute}
      addSecond={timerStore?.addSecond}
      subtractHour={timerStore?.subtractHour}
      subtractMinute={timerStore?.subtractMinute}
      subtractSecond={timerStore?.subtractSecond}
      autoPlayEnabled={timerStore?.autoPlayEnabled}
      onReset={timerStore?.reset}
      playSound={timerStore?.playSound}
    />
  );
};

export default inject("timerStore")(observer(TimerComponent));
