import React from 'react';

//styles
import {GlobalStyles} from './GlobalStyles';

//components
import Header from './components/Header/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
