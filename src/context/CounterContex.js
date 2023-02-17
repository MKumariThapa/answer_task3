import React, { useState, useContext } from "react";

// const CounterContex = () => {
//   return <div>CounterContex</div>;
// };

// export default CounterContex;

export const CounterContext = React.createContext();

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const values = { count, increaseCount, decreaseCount };
  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
