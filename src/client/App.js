import React from 'react';
import Home from '../client/pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <Home />
        <Footer />
    </Router>
  )
}

export default App
