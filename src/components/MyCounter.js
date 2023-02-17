import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const MyCounter = () => {
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);
  return (
    <div style={{ backgroundColor: "#0000FF" }}>
      <p>This is Counter Component</p>
      <p>Count is : {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default MyCounter;
