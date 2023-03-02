import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
