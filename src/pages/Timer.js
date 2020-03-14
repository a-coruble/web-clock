import React, { useState, useEffect } from "react";
import { observer, useObservable } from "mobx-react-lite";
import moment from "moment";
import styled, { css } from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import Switch from "@bit/mui-org.material-ui.switch";
import { toast } from "react-toastify";
import canAutoplay from "can-autoplay";

import TimerNumber from "../atoms/TimerNumber";
import Sound from "../Helios.m4a";

const StyledContainer = styled.div`
  grid-area: center;
  display: grid;
  grid-template-areas:
    "addHour addMinute addSecond"
    "hours minutes seconds"
    "substractHour substractMinute substractSecond"
    "cancel space startStop";
  grid-template-rows: 0.5fr 1fr 0.5fr 0.5fr;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "substractHour hours addHour"
      "substractMinute minutes addMinute"
      "substractSecond seconds addSecond"
      "cancel space startStop";
    grid-template-rows: repeat(4, 0.5fr);
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-gap: 1rem;
  }
  max-height: 100vh;
  user-select: none;
`;

const StyledTimerHoursContainer = styled.div`
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  grid-area: hours;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 12.5rem;
  padding: 0.5rem;
  @media only screen and (max-width: 768px) {
    > p {
      font-size: 6rem;
    }
    max-height: 6.25rem;
  }
`;

const StyledTimerMinutesContainer = styled.div`
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  grid-area: minutes;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 12.5rem;
  padding: 0.5rem;
  @media only screen and (max-width: 768px) {
    > p {
      font-size: 6rem;
    }
    max-height: 6.25rem;
  }
`;

const StyledTimerSecondsContainer = styled.div`
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  grid-area: seconds;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 12.5rem;
  padding: 0.5rem;
  @media only screen and (max-width: 768px) {
    > p {
      font-size: 6rem;
    }
    max-height: 6.25rem;
  }
`;

const StyledAddHourButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addHour;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledAddMinuteButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addMinute;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledAddSecondButton = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: addSecond;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledSubstractHourButton = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: substractHour;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledSubstractMinuteButton = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: substractMinute;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledSubstractSecondButton = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff10;
  border-radius: 50%;
  display: flex;
  grid-area: substractSecond;
  height: 50px;
  justify-content: center;
  justify-self: center;
  opacity: ${props => (props.running ? 0.6 : 1)};
  transition: transform 0.2s;
  width: 50px;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
  ${props =>
    !props.running &&
    css`
      :hover {
        transform: scale(1.2);
      }
    `}
`;

const StyledResetButton = styled.div`
  align-items: center;
  align-self: center;
  background-color: #ffffff10;
  border-radius: 50%;
  color: white;
  display: flex;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
  grid-area: cancel;
  height: 6.25rem;
  justify-content: center;
  justify-self: center;
  transition: transform 0.2s;
  width: 6.25rem;
  :hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    font-size: 1.2rem;
    height: 4rem;
    width: 4rem;
    margin-top: 1.5rem;
  }
`;

const StyledStartStopButton = styled.div`
  align-items: center;
  align-self: center;
  background-color: ${props => (props.running ? "darkred" : "darkgreen")};
  border-radius: 50%;
  color: white;
  display: flex;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
  grid-area: startStop;
  height: 6.25rem;
  justify-content: center;
  justify-self: center;
  transition: transform 0.2s;
  width: 6.25rem;
  :hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    font-size: 1.2rem;
    height: 4rem;
    width: 4rem;
    margin-top: 1.5rem;
  }
`;

const StyledSwitchContainer = styled.div`
  align-items: center;
  align-self: center;
  background-color: #ffffff10;
  border-radius: 8%;
  display: flex;
  flex-direction: column;
  grid-area: space;
  justify-content: center;
  justify-self: center;
  color: white;
  padding: 0.5rem;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-weight: bold;
`;

const defaultTimer = moment.duration({ minutes: 10 });

const Timer = observer(() => {
  const audio = new Audio(Sound);
  const [autoplayEnabled, setAutoPlayEnabled] = useState(false);

  useEffect(() => {
    canAutoplay.audio().then(({ result }) => {
      setAutoPlayEnabled(result);
    });
  }, []);

  const store = useObservable({
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
          if (store.playSound && autoplayEnabled) {
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
  });

  return (
    <StyledContainer>
      <StyledAddHourButton
        onClick={store.running ? () => {} : store.addHour}
        running={store.running}
      >
        <FaPlus color="white" />
      </StyledAddHourButton>
      <StyledTimerHoursContainer>
        <TimerNumber number={store.value.hours()} />
      </StyledTimerHoursContainer>
      <StyledSubstractHourButton
        onClick={store.running ? () => {} : store.subtractHour}
        running={store.running}
      >
        <FaMinus color="white" />
      </StyledSubstractHourButton>
      <StyledAddMinuteButton
        onClick={store.running ? () => {} : store.addMinute}
        running={store.running}
      >
        <FaPlus color="white" />
      </StyledAddMinuteButton>
      <StyledTimerMinutesContainer>
        <TimerNumber number={store.value.minutes()} />
      </StyledTimerMinutesContainer>
      <StyledSubstractMinuteButton
        onClick={store.running ? () => {} : store.subtractMinute}
        running={store.running}
      >
        <FaMinus color="white" />
      </StyledSubstractMinuteButton>
      <StyledAddSecondButton
        onClick={store.running ? () => {} : store.addSecond}
        running={store.running}
      >
        <FaPlus color="white" />
      </StyledAddSecondButton>
      <StyledTimerSecondsContainer>
        <TimerNumber number={store.value.seconds()} />
      </StyledTimerSecondsContainer>
      <StyledSubstractSecondButton
        onClick={store.running ? () => {} : store.subtractSecond}
        running={store.running}
      >
        <FaMinus color="white" />
      </StyledSubstractSecondButton>
      {store.running && (
        <StyledResetButton onClick={store.cancel}>Cancel</StyledResetButton>
      )}
      <StyledStartStopButton
        onClick={store.running ? store.stop : store.start}
        running={store.running}
      >
        {store.running ? "Stop" : "Start"}
      </StyledStartStopButton>
      {autoplayEnabled && (
        <StyledSwitchContainer>
          <Switch checked={store.playSound} onClick={store.setPlaySound} />
          Play sound at end
        </StyledSwitchContainer>
      )}
    </StyledContainer>
  );
});

export default Timer;
