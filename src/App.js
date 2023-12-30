import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Layouts/Routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
