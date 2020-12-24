import React from 'react';

//styles
import {GlobalStyles} from './GlobalStyles';

//components
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyles />
    </div>
  );
}

export default App;
