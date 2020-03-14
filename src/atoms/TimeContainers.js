import styled from "styled-components";

export const HoursContainer = styled.div`
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

export const MinutesContainer = styled.div`
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

export const SecondsContainer = styled.div`
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

export const MilliSecondsContainer = styled.div`
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  grid-area: milliseconds;
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

export const StopWatchTimeContainer = styled.div`
  grid-area: center;
  display: grid;
  grid-template-areas:
    "hours minutes seconds milliseconds"
    "reset lap lap startStop";
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "hours minutes"
      "seconds milliseconds"
      "reset lap"
      "startStop startStop";
    grid-template-rows: repeat(4, 0.5fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  max-height: 100vh;
  user-select: none;
`;

export const TimerContainer = styled.div`
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
