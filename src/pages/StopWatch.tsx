import React from "react";
import { observer, inject } from "mobx-react";
import moment from "moment";

import { StopWatchStore } from "../stores/StopwatchStore";
import StopWatchLayout from "../organisms/StopWatchLayout";

interface StopWatchProps {
  stopwatchStore?: StopWatchStore;
}

const StopWatchComponent = ({ stopwatchStore }: StopWatchProps) => {
  return (
    <StopWatchLayout
      running={stopwatchStore?.running ?? false}
      time={stopwatchStore?.value ?? moment.duration()}
      onReset={stopwatchStore?.reset}
      onStart={stopwatchStore?.start}
      onStop={stopwatchStore?.stop}
      onLap={stopwatchStore?.lap}
      laps={stopwatchStore?.laps ?? []}
    />
  );
};

export default inject("stopwatchStore")(observer(StopWatchComponent));
