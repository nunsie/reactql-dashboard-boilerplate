import React, { Component } from 'react';

import { history } from 'kit/lib/routing'

import { Grid, Row, Col, Table } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'


import Card from '../../components/Card';
import { thArray, tdArray } from '../../variables';

import loginMutation from 'src/graphql/mutations/signinUser.gql'

@graphql(loginMutation)
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      loading: null,
      email: null,
      password: null
    }
  }

  tryLogin = async (event) => {
    if (event !== undefined && event.preventDefault) event.preventDefault()
    this.setState({error: false, loading: true})
    try {
      // Send the login request to the server using our email/password,
      // await the response, and parse the `data.login` entry point
      console.log(this.state)
      const {data: { signinUser }} = await this.props.mutate({
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      })

      // Store the returned JWT token in `localStorage` if we're in the
      // browser, so we can pass that over in subsequent requests
      if (!SERVER) {
        window.localStorage.setItem('ReactQLAdmin', signinUser.token)
      }
      this.setState({loading: false})
      history.push('/dashboard')
    } catch (e) {
      // Some kind of error was returned -- display it in the console
      // eslint-disable-next-line no-console
      console.error('GraphQL error: ', e)
      this.setState({error: e.message, loading: false})
    }
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <link href="http://lbd-pro-react.creative-tim.com/static/css/main.07508d68.css" rel="stylesheet" type='text/css' />
        </Helmet>
        <nav className="navbar-primary navbar-transparent navbar-absolute navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="nav-link navbar-brand" aria-current="false" href="#">Login</a>
              <button type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse"></div>
          </div>
        </nav>
        <div className="wrapper wrapper-full-page">
          <div className="full-page login-page" data-color="black" data-image="http://lbd-pro-react.creative-tim.com/static/media/full-screen-image-3.ef9c8d65.jpg">
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                    <form>
                      <div className="card">
                        <div className="header text-center">
                          <img src="http://via.placeholder.com/200x100" />
                          <h4 className="title">Login</h4>
                          <p className="category"></p>
                        </div>
                        <div className="content">
                          <div>
                            <div className="form-group">
                              <label className="control-label">Email address</label>
                              <input type="email" placeholder="Enter email" className="form-control" onChange={this.onChangeEmail} value={this.state.email} />
                            </div>
                            <div className="form-group">
                              <label className="control-label">Password</label>
                              <input type="password" placeholder="Password" className="form-control" onChange={this.onChangePassword} value={this.state.password} />
                            </div>
                          </div>
                        </div>
                        <div className="footer text-center">
                          <div className="legend">
                            <button type="button" className="btn-fill btn-wd btn btn-info" onClick={this.tryLogin}>Login</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer footer-transparent">
              <div className="container">
                <p className="copyright pull-right">
                  <a href="http://www.creative-tim.com/">Creative Tim</a>
                  <i className="fa fa-heart heart"></i>
                </p>
              </div>
            </footer>
            <div className="full-page-background" style={{ backgroundImage: "url('http://lbd-pro-react.creative-tim.com/static/media/full-screen-image-3.ef9c8d65.jpg')"}}></div>
          </div>
        </div>
      </div>
    );
  }
}