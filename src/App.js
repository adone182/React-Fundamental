// parent components

import React, { useState } from 'react';
import Testing from './components/testing';

const App = () => {
  const  [getLimit , setLimit] = useState(1);

  return (
   <>
      <center>
      {getLimit}
      <br/>
      <button>Tambah Limit</button>
      </center>
     <Testing/>
   </>
  );
}

export default App;
