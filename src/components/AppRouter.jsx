import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />
  }

  return (
    isAuth ?
      <Switch>
        {privateRoutes.map(x => (
          <Route
            key={x.path}
            path={x.path}
            component={x.component}
            exact={x.exact}
          />
        ))}
        <Redirect to='/posts' />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(x => (
          <Route
            key={x.path}
            path={x.path}
            component={x.component}
            exact={x.exact}
          />
        ))}
        <Redirect to='/login' />
      </Switch>
  )
}

export default AppRouter;