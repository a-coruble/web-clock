import React from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { observable, computed, action } from "mobx";
import { toast } from "react-toastify";
import moment from "moment";
import canAutoPlay from "can-autoplay";

import sound from "../media/sound/Helios.m4a";

export class TimerStore {
  audio = new Audio(sound);
  defaultTimer = moment.duration({ minutes: 5 });

  @observable value = this.defaultTimer;
  @observable interval: number | null = null;
  @observable playSound = false;
  @observable autoPlayEnabled = false;

  @computed get running() {
    return this.interval !== null;
  }

  constructor() {
    canAutoPlay.audio().then(autoPlayEnabled => {
      this.autoPlayEnabled = autoPlayEnabled;
    });
  }

  @action.bound
  addHour() {
    this.value = moment.duration(this.value).add(1, "hour");
  }

  @action.bound
  subtractHour() {
    if (this.value.hours() > 0) {
      this.value = moment.duration(this.value).subtract(1, "hour");
    }
  }
  @action.bound
  addMinute() {
    this.value = moment.duration(this.value).add(1, "minute");
  }

  @action.bound
  subtractMinute() {
    const less1Minute = moment.duration(this.value).subtract(1, "minute");
    if (less1Minute.seconds() < 0) {
      this.value = moment.duration();
    } else if (this.value.toISOString() !== moment.duration().toISOString()) {
      this.value = less1Minute;
    }
  }

  @action.bound
  addSecond() {
    this.value = moment.duration(this.value).add(1, "second");
  }

  @action.bound
  subtractSecond() {
    if (this.value.toISOString() !== moment.duration().toISOString()) {
      this.value = moment.duration(this.value).subtract(1, "second");
    }
  }

  @action.bound
  start() {
    this.interval = setInterval(() => {
      this.subtractSecond();
      if (this.value.toISOString() === moment.duration().toISOString()) {
        toast("Time's up !!", {
          type: toast.TYPE.INFO,
          position: toast.POSITION.TOP_RIGHT,
          onClose: () => {
            this.audio.pause();
            this.audio.currentTime = 0;
          }
        });
        if (this.playSound && this.autoPlayEnabled) {
          this.audio.volume = 1;
          this.audio.play();
        }
        this.reset();
      }
    }, 1000);
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
    this.value = this.defaultTimer;
  }

  @action.bound
  setPlaySound() {
    this.playSound = !this.playSound;
  }
}

export const timerStore = new TimerStore();
