import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const ComponenetB = () => {
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);

  return (
    <div style={{ backgroundColor: "#FFC0CB" }}>
      <h3>This is ComponenetB</h3>
      <p>Count is : {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default ComponenetB;
