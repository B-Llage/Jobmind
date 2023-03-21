import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import JobMindAiLayout from './Components/Layouts/JobMindAiLayout';
import About from './Views/About';

function App() {

  useEffect(() => {
    document.title = 'JobMind AI';
  }, []);

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<JobMindAiLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
