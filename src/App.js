import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DistrictPage from './pages/DistrictPage.js';
import LandingPage from './pages/LandingPage.js';
import RegionPage from './pages/RegionPage.js';
import TagPage from './pages/TagPage.js';

function App() {
  const [selections, setSelections] = useState({species: null, residency: null, region: null, district: null, tag: null})

  return (
    <div>
      <Router>
        <Route exact path="/">
          <LandingPage selections={selections} setSelections={setSelections}/>
        </Route>

        <Route path="/regions">
          <RegionPage selections={selections} setSelections={setSelections} />
        </Route>
        
        <Route path="/districts">
          <DistrictPage selections={selections} setSelections={setSelections}/>
        </Route>
        
        <Route exact path="/tags">
          <TagPage selections={selections} setSelections={setSelections}/>
        </Route>

        <Route exact path="/tags/:tag_id">
          <TagPage selections={selections} setSelections={setSelections}/>
        </Route>
      </Router>

    </div>
  );
}

export default App;