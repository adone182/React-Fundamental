// children components use arrow function component

import React from "react";
import Testing3 from "./testing2";

const Testing = () => {
  return(
    <React.Fragment>
      <h1>Testing Cuys</h1>
      <p>Ini description testing chidren components</p>
      <Testing3/>
    </React.Fragment>
  )
}

export default Testing;