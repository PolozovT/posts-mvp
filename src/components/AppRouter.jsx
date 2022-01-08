import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostInfo from "../pages/PostInfo";
import Posts from "../pages/Posts";

const AppRouter = () => {

  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/posts'>
        <Posts />
      </Route>
      <Route path='/posts/:id'>
        <PostInfo />
      </Route>
      <Route path='/error'>
        <Error />
      </Route>
      <Redirect to='/error' />
    </Switch>
  )
}

export default AppRouter;