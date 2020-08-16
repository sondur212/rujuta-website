import React from 'react';
import { Route } from 'react-router-dom';

/**
 * create route based on view component
 * This assumes view has URL property associaed with it
 * @param View
 */
export function ViewRoute(View) {
  if (!View.Url) {
    throw new Error('no url associated with view' + View.name);
  }

  if (View.Route) {
    return View.Route();
  }
  return <Route exact path={View.Url} key={View.Url} component={View} />;
}
