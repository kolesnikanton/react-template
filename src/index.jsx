import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Container from './pages/Container';
import NotFound from './pages/NotFound';

import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('main'),
);
