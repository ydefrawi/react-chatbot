import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstTry from './Pages/FirstTry/FirstTry'
import Home from './Pages/Home/Home'
import SimpleChatbot from './Pages/SimpleChatbot/SimpleChatbot'
import HarborsPage from './Pages/HarborsPage/HarborsPage'
import HarborsPage2 from './Pages/HarborsPage2/HarborsPage2'

function App() {
  return (
  <Router>
        <div className="App">
      <header>
      </header>
      <Route exact path={["/", "/home"]} component={Home}/>
      <Route exact path={["/chatsummary"]} component={SimpleChatbot}/>
      <Route exact path={["/firsttry"]} component={FirstTry}/>
      <Route exact path={["/customform"]} component={HarborsPage}/>
      <Route exact path={["/harborscustom"]} component={HarborsPage2}/>
    </div>
  </Router>
  );
}

export default App;
