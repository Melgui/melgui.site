//React libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styles
import './styles/global.css';

//Components
import Header from './components/Header'; 

//Pages
import HomePage from './pages/HomePage'; 
import CounterPage from './pages/CounterPage'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
