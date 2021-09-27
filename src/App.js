import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home'
import SimpleChatbot from './Pages/SimpleChatbot/SimpleChatbot'

function App() {
  return (
  <Router>
        <div className="App">
      <header>
      </header>
      <Route exact path={["/", "/home"]} component={Home}/>
      <Route exact path={["/chatbot"]} component={SimpleChatbot}/>
    </div>
  </Router>
  );
}

export default App;
