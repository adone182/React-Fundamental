// Parent Component

import React from "react";
import Albums from "./components/Albums/main.albums";
import MainLayouts from "./components/Layouts/main.layout";

const App = () => {
  return (
    <MainLayouts>
      <Albums title="Image From API" description="Images Fetch API from Thrid Party"/>
    </MainLayouts>
  );
};

export default App;
