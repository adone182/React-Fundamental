import React from "react";
import Navigation from "./navigation";

const MainLayouts = ({children}) => {

  return(
  <React.Fragment>
    <Navigation/>
    {children}
  </React.Fragment>
  )
}

export default MainLayouts;