import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContex";

const ComponenetA = () => {
  const { count } = useContext(CounterContext);
  return (
    <div style={{ backgroundColor: "#808080" }}>
      This is ComponenetA
      <p>{count}</p>
    </div>
  );
};

export default ComponenetA;
