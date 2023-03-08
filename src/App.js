import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EpisodeView from './pages/episodeView/EpisodeView';
import Video from './pages/video/Video';
import Login from './pages/login/Login';
import SignOut from './pages/signOut/SignOut';
import ExternalLinks from './pages/externalLinks/ExternalLinks';


function App() {
  return (
    <Router>
        <div>
            <nav>
                <li>
                    <Link to="/EpisodeView">EpisodeView</Link>
                </li>
                <li>
                    <Link to="/Video">Video</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/SignOut">SignOut</Link>
                </li>
                <li>
                    <Link to="/ExternalLinks">ExternalLinks</Link>
                </li>
            </nav>

            <Switch>
                <Route path="/EpisodeView">
                
                </Route>

                <Route path="/Video">

                </Route>

                <Route path ="/Login">

                </Route>

                <Route path="SignOut">

                </Route>

                <Route path="ExternalLinks">

                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;