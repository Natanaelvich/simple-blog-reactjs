import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterCategory from './pages/RegisterCategory';
import ListCategories from './pages/ListCategoreis';
import UpdateCategpry from './pages/EditingCategory';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListCategories} />
        <Route path="/register-category" component={RegisterCategory} />
        <Route path="/update-category" component={UpdateCategpry} />
      </Switch>
    </BrowserRouter>
  );
}
