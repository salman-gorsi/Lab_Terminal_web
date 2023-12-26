// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RocketsList from './components/RocketsList';
import SpaceMissions from './components/SpaceMissions';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/rockets" component={RocketsList} />
        <Route path="/missions" component={SpaceMissions} />
        <Route path="/myprofile" component={MyProfile} />
      </Switch>
    </Router>
  );
}

export default App;
