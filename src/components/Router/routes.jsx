import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignUpPage } from "../../containers/SignUpPage/SignUpPage";
// import HomePage from "../../containers/HomePage/HomePage";
import { ErrorPage } from "../../containers/ErrorPage/ErrorPage";
import { VideoPage } from "../../containers/VideoPage/VideoPage";
// import VideoInfoPage from "../../containers/VideoInfoPage/VideoInfoPage";
import DynamicImport from '../../DynamicImports'
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner'


// Custom dynamic Imports
const Home = (props) => (
  <DynamicImport load={() => import('../../containers/HomePage/HomePage')}>
    {
      (Component) => Component === null
        ? <LoadingSpinner />
        : <Component {...props} />
    }
  </DynamicImport>
)


const VideoInfoPage = (props) => (
  <DynamicImport load={() => import('../../containers/VideoInfoPage/VideoInfoPage')}>
    {
      (Component) => Component === null
        ? <LoadingSpinner />
        : <Component {...props} />
    }
  </DynamicImport>
)

// TODO - replace the dynamic code splitting to react splitting
// Using react lazy laoding and react suspense
// const LazyHome = React.lazy(() => import('../../containers/HomePage/HomePage'))
// const LazyVideoInfo = React.lazy(() => import('../../containers/VideoInfoPage/VideoInfoPage'))

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/player" component={VideoPage} />
        <Route path="/videoinfo" component={VideoInfoPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
