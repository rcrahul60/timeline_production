import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact from="/services" render={props => <Services {...props} />} />
          <Route exact from="/contact" render={props => <Contact {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
