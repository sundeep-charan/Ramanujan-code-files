import { Route, Redirect } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({
  user,
  componentProps,
  component: Component,
  ...restProps
}) => {
  return !user ? (
    <Redirect to="/login" />
  ) : (
    <Route
      {...restProps}
      render={routeProps => <Component {...routeProps} {...componentProps} />}
    />
  );
};

export default ProtectedRoute;
