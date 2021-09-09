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

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getRockets());
  });

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Space Traveler&apos;s Hub</h1>
          </div>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
