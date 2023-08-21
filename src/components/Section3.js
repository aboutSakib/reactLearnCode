import React, { useContext } from "react";
import tempContext from "./TempContext";
function Section3({ value }) {
  let Context = useContext(tempContext);
  const { count } = Context;

  return (
    <div>
      <h1>hello good night: {count}</h1>
    </div>
  );
}

export default Section3;
