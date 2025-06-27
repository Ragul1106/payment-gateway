import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
};

export default App;
