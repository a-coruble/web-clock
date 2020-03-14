import React from "react";
import { observer, useObservable } from "mobx-react-lite";
import moment from "moment";

import { StopWatchCounter } from "../organisms";

const defaultStopWatch = moment.duration();

const StopWatch = observer(() => {
  const store = useObservable({
    value: defaultStopWatch,
    laps: [],
    get running() {
      return store.interval !== null;
    },
    interval: null,
    start: () => {
      store.interval = setInterval(() => {
        store.value = moment.duration(store.value).add(10, "millisecond");
      }, 10);
    },
    stop: () => {
      clearInterval(store.interval);
      store.interval = null;
    },
    cancel: () => {
      clearInterval(store.interval);
      store.interval = null;
      store.value = defaultStopWatch;
    },
    lap: () => {
      store.laps = [moment.duration(store.value), ...store.laps];
    }
  });

  return (
    <StopWatchCounter
      time={store.value}
      onStart={store.start}
      onStop={store.stop}
      onReset={store.cancel}
      running={store.running}
    />
  );
});

export default StopWatch;
