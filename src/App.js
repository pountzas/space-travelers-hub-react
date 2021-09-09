import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from './assets/planet.png';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/rockets/rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';
import getRockets from './redux/slices/rocketsSlice';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/missions" />
          <Route path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
