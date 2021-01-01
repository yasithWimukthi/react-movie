import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//styles
import {GlobalStyles} from './GlobalStyles';

//components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
