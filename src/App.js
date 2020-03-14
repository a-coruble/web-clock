import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Timer from "./pages/Timer";

import "./index.css";

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
`;

const App = () => (
  <BrowserRouter>
    <StyledContainer>
      <Switch>
        <Route path="/" component={Timer} exact />
      </Switch>
    </StyledContainer>
  </BrowserRouter>
);

export default App;
