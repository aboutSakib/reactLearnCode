import React from "react";
import withCounter from "./HOC/withCounter";

const Counter1 = (props) => {
  let { count, incrementCounter } = props;

  return (
    <div>
      <button onClick={incrementCounter}> click: {count} </button>
    </div>
  );
};

export default withCounter(Counter1);
