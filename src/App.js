import React from 'react';
import './App.css';
import { HashRouter, Route} from "react-router-dom";
import Home from './components/Home/index.js';

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
    
      <Route exact path="/" component={Home} />

    </div>
    </HashRouter>
  );
}

export default App;