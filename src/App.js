import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import './App.css';

const App = () => (
  <>
    <Router>
      {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div> */}
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route path="/missions" component={Mission} />
        <Route path="/profile" />
      </Switch>
    </Router>
  </>
);

export default App;
