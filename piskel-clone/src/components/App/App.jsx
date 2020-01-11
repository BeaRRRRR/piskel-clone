import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import './App.scss';
import Home from '../../pages/Home/Home';
import Create from '../../pages/Create/Create';

function App() {
  useEffect(() => {
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body,
    });
  }, []);

  return (
    <Router>
      <div id="netlify-modal" className="netlify-modal" data-netlify-identity-button />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
