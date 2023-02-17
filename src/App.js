import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import ComponenetA from "./components/ComponenetA";
import ComponenetB from "./components/ComponenetB";
import MyCounter from "./components/MyCounter";
import CounterContextProvider from "./context/CounterContex";

function App() {
  return (
    <CounterContextProvider>
      <ComponenetA />
      <ComponenetB />

      <MyCounter />
    </CounterContextProvider>
  );
}

export default App;
