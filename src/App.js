import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
