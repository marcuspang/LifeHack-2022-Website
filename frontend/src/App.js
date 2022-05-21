import Home from './pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Home />} />
    </Routes>
  );
}

export default App;
