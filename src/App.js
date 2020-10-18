import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
     <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/services" component={Services}/>
       <Route path="/contact" component={Contact} />
      </Switch>
     </Router>
    </>
  );
}

export default App;
