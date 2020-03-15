import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";
import styled from "styled-components";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

import { Timer, StopWatch } from "./pages";
import { MenuBar } from "./organisms";

import "./index.css";
import { TimerStore } from "./stores";

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    "menu menu menu"
    "leftCol center rightCol"
    "footer footer footer";
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "menu"
      "center"
      "footer";
    grid-template-rows: 1fr 2fr 0.5fr;
    grid-template-columns: 1fr;
  }
  height: 100vh;
  background-color: #121212;
  touch-action: manipulation;
`;

toast.configure();

const App = () => (
  <BrowserRouter>
    <Provider timerStore={new TimerStore()}>
      <StyledContainer>
        <MenuBar />
        <Switch>
          <Route path="/" component={Timer} exact />
          <Route path="/stopwatch" component={StopWatch} />
        </Switch>
      </StyledContainer>
    </Provider>
  </BrowserRouter>
);

export default App;
