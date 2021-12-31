import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticate } from "./index";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoutes;
