import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Pages/Homepage/Home';
import EpisodeView from './Pages/EpisodeView/EpisodeView';


function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/EpisodeView" element={<EpisodeView />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;