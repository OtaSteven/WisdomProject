import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Pages/Homepage/Home';
import EpisodeView from './Pages/EpisodeView/EpisodeView';
import ExternalLink from './Pages/ExternalLink/ExternalLink';
import Login from './Pages/Login/Login';
import Signout from './Pages/Signout/Signout';
import Video from './Pages/Video/Video';


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/EpisodeView" element={<EpisodeView />} />
                <Route path="/ExternalLink" element={<ExternalLink />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signout" element={<Signout />} />
                <Route path="/Video" element={<Video />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;