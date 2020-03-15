import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { observable, computed, action } from "mobx";
import moment from "moment";

const defaultStopWatch = moment.duration();

export class StopWatchStore {
  @observable value = defaultStopWatch;
  @observable laps: moment.Duration[] = [];
  @observable interval: number | null = null;

  @computed get running() {
    return this.interval !== null;
  }

  @action.bound
  start() {
    this.interval = setInterval(() => {
      this.value = moment.duration(this.value).add(1, "millisecond");
    }, 1);
  }

  @action.bound
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = null;
  }

  @action.bound
  reset() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = null;
    this.value = defaultStopWatch;
  }

  @action.bound
  lap() {
    this.laps = [moment.duration(this.value), ...this.laps];
  }
}

export const stopwatchStore = new StopWatchStore();
