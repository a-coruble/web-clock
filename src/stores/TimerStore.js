import React, { createContext, useEffect } from "react";
import { useLocalStore } from "mobx-react-lite";
import moment from "moment";
import { toast } from "react-toastify";
import canAutoplay from "can-autoplay";

import Sound from "../Helios.m4a";

const defaultTimer = moment.duration({ minutes: 10 });

export const TimerContext = createContext();

// export class TimerStore
// TODO: follow Guide on Dev.To to use class
export const TimerProvider = ({ children }) => {
  const audio = new Audio(Sound);

  const store = useLocalStore(() => ({
    autoplayEnabled: false,
    setAutoPlayEnabled: enabled => {
      store.autoplayEnabled = enabled;
    },
    value: moment.duration({ minutes: 10 }),
    playSound: false,
    setPlaySound: () => {
      store.playSound = !store.playSound;
    },
    get running() {
      return store.interval !== null;
    },
    addHour: () => {
      if (store.value.hours() < 99) {
        store.value = moment.duration(store.value).add(1, "hour");
      }
    },
    subtractHour: () => {
      if (store.value.hours() > 0) {
        store.value = moment.duration(store.value).subtract(1, "hour");
      }
    },
    addMinute: () => {
      store.value = moment.duration(store.value).add(1, "minute");
    },
    subtractMinute: () => {
      const less1Minute = moment.duration(store.value).subtract(1, "minute");
      if (less1Minute.seconds() < 0) {
        store.value = moment.duration();
      } else if (
        store.value.toISOString() !== moment.duration().toISOString()
      ) {
        store.value = less1Minute;
      }
    },
    addSecond: () => {
      store.value = moment.duration(store.value).add(1, "second");
    },
    subtractSecond: () => {
      if (store.value.toISOString() !== moment.duration().toISOString()) {
        store.value = moment.duration(store.value).subtract(1, "second");
      }
    },
    interval: null,
    start: () => {
      store.interval = setInterval(() => {
        store.subtractSecond();
        if (store.value.toISOString() === moment.duration().toISOString()) {
          toast("Time's up !!", {
            type: toast.TYPE.INFO,
            position: toast.POSITION.TOP_RIGHT,
            onClose: () => {
              audio.pause();
              audio.currentTime = 0;
            }
          });
          if (store.playSound && store.autoplayEnabled) {
            audio.volume = 1;
            audio.play();
          }
          store.cancel();
        }
      }, 1000);
    },
    stop: () => {
      clearInterval(store.interval);
      store.interval = null;
    },
    cancel: () => {
      clearInterval(store.interval);
      store.interval = null;
      store.value = defaultTimer;
    }
  }));

  useEffect(() => {
    canAutoplay.audio().then(({ result }) => {
      store.setAutoPlayEnabled(result);
    });
  }, []);

  return (
    <TimerContext.Provider value={store}>{children}</TimerContext.Provider>
  );
};
