import { observable, computed, action } from "mobx";
import moment from "moment";
import { toast } from "react-toastify";
import canAutoplay from "can-autoplay";

import sound from "../Helios.m4a";

const defaultTimer = moment.duration({ minutes: 10 });

export default class TimerStore {
  constructor() {
    canAutoplay
      .audio()
      .then(({ autoPlayEnabled }) => this.setAutoPlayEnabled(autoPlayEnabled));
  }

  @observable value = defaultTimer;
  @observable autoplayEnabled = false;
  @observable playSound = false;
  @observable interval = null;
  audio = new Audio(sound);

  @computed
  get running() {
    return this.interval !== null;
  }

  @action
  setAutoPlayEnabled(enabled) {
    this.autoplayEnabled = enabled;
  }

  @action
  setPlaySound() {
    this.playSound = !this.playSound;
  }

  @action
  addHour() {
    if (this.value.hours() < 99) {
      this.value = moment.duration(this.value).add(1, "hour");
    }
  }

  @action
  subtractHour() {
    if (this.value.hours() > 0) {
      this.value = moment.duration(this.value).subtract(1, "hour");
    }
  }

  @action
  addMinute() {
    this.value = moment.duration(this.value).add(1, "minute");
  }

  @action
  subtractMinute() {
    const less1Minute = moment.duration(this.value).subtract(1, "minute");
    if (less1Minute.seconds() < 0) {
      this.value = moment.duration();
    } else if (this.value.toISOString() !== moment.duration().toISOString()) {
      this.value = less1Minute;
    }
  }

  @action
  addSecond() {
    this.value = moment.duration(this.value).add(1, "second");
  }

  @action
  subtractSecond() {
    if (this.value.toISOString() !== moment.duration().toISOString()) {
      this.value = moment.duration(this.value).subtract(1, "second");
    }
  }

  @action
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
        if (this.playSound && this.autoplayEnabled) {
          this.audio.volume = 1;
          this.audio.play();
        }
        this.cancel();
      }
    }, 1000);
  }

  @action
  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  @action
  cancel() {
    clearInterval(this.interval);
    this.interval = null;
    this.value = defaultTimer;
  }
}
