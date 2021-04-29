import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Chapters from './components/Chapters'
import Covers from './components/Chcovers'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
   	    <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/chapters" component={Chapters} />
        <Route path="/covers" component={Covers} />
      </div>
    </Router>
  );
}

export default App;
