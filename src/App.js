import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PropertyForm from "./Components/PropertyForm";
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/PropertyForm" exact component={PropertyForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
