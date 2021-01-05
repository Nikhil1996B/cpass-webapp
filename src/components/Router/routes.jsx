import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUpPage } from "../../containers/SignUpPage/SignUpPage";
// import HomePage from "../../containers/HomePage/HomePage";
import { ErrorPage } from "../../containers/ErrorPage/ErrorPage";
import { VideoPage } from "../../containers/VideoPage/VideoPage";
// import VideoInfoPage from "../../containers/VideoInfoPage/VideoInfoPage";
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner'

const LazyHome = lazy(() => import('../../containers/HomePage/HomePage'))
const LazyVideoInfo = lazy(() => import('../../containers/VideoInfoPage/VideoInfoPage'))

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route path="/home" component={LazyHome} />
          <Route path="/player" component={VideoPage} />
          <Route path="/videoinfo" component={LazyVideoInfo} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
