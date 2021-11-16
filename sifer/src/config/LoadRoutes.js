import React from "react";
import { Route, Switch } from "react-router-dom";

const LoadRoutes = (props) => {
  const { routes } = props;
  console.log("routes", routes)
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};
export default LoadRoutes;
