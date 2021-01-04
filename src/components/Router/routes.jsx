import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUpPage } from "../../containers/SignUpPage/SignUpPage";
import { HomePage } from "../../containers/HomePage/HomePage";
import { ErrorPage } from "../../containers/ErrorPage/ErrorPage";
import { VideoPage } from "../../containers/VideoPage/VideoPage";
import  VideoInfoPage  from "../../containers/VideoInfoPage/VideoInfoPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/player" component={VideoPage} />
        <Route path="/videoinfo" component={VideoInfoPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
