import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Friends from './Friends'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Friends} />
      </div>
    );
  }
}

export default App;
