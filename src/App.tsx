import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Timer from "./pages/Timer";
import { timerStore } from "./stores/TimerStore";
import { stopwatchStore } from "./stores/StopwatchStore";
import StopWatch from "./pages/StopWatch";
import MenuBar from "./organisms/MenuBar";

toast.configure();

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

function App() {
  return (
    <BrowserRouter>
      <Provider timerStore={timerStore} stopwatchStore={stopwatchStore}>
        <ToastContainer />
        <StyledContainer>
          <MenuBar />
          <Switch>
            <Route path="/" exact component={Timer} />
            <Route path="/stopwatch" component={StopWatch} />
          </Switch>
        </StyledContainer>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
