import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Staff from './components/Staff';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/staff' component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;
