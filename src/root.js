// Main React component, that we'll import in `src/app.js`

import { Redirect } from 'kit/lib/routing'
import React from 'react'
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router-dom'

import PageNotFound from './containers/404Container'

import Dashboard from './containers/Dashboard';
import UserProfile from './containers/UserProfile';
import TableList from './containers/TableList';
import Typography from './containers/Typography';
import Icons from './containers/Icons';
import Maps from './containers/Maps';
import Login from './containers/Login';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Notifications from './components/Notifications';

/**
 * RootContainer
 * @returns {*}
 */
export default () => (
  <div className="wrapper">
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>ReactQL Admin</title>
      <link href="//use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
      <link href='//fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css' />
      <link href="http://lbd-pro-react.creative-tim.com/static/css/main.07508d68.css" rel="stylesheet" type='text/css' />
    </Helmet>
    <Switch>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Dashboard} />
      <PrivateRoute exact path='/dashboard' component={Dashboard}/>
      <PrivateRoute exact path='/user' component={UserProfile}/>
      <PrivateRoute exact path='/table' component={TableList}/>
      <PrivateRoute exact path='/typography' component={Typography}/>
      <PrivateRoute exact path='/icons' component={Icons}/>
      <PrivateRoute exact path='/maps' component={Maps}/>
      <PrivateRoute component={PageNotFound} />      
    </Switch>
  </div>
)

// this relies on you using the component prop
const RouteWithProps = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )} />
)

// usage
// <RouteWithProps component={Component} foo={bar} />

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <div>
        <Notifications />
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props}/>
          <Component {...props} />
          <Footer />
        </div>
      </div>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )
  )} />
)

function isLoggedIn () {
  if (!SERVER) {
    return !!window.localStorage.getItem('ReactQLAdmin')
  }
  return false
}
