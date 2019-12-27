import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Faqs from './components/Faqs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop/>
      <Navbar/>
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/faqs" component={Faqs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
