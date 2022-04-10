import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  );
}
