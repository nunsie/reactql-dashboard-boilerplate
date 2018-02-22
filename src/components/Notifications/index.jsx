// Component that demonstrates using a part of the Redux store
// outside of Apollo.  We can use config.addReducer(key, reducer) in `src/app.js`
// to add custom Redux reducers

// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';

// HOC/decorator to listen to Redux store state
import { connect } from 'react-redux';

import { style } from '../../variables';

// ----------------------
// @connect accepts a function that takes the full Redux state, and then
// returns the portion of state that our component cares about.  In this example,
// we're listening to `state.counter`, which we can show inside the component
@connect(state => ({ notification: state.notification }))
export default class Notifications extends React.PureComponent {

  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null
    };
  }

  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
  }

  componentWillReceiveProps(props) {
    if (props.notification.notification) {
      let notification = props.notification.notification
      this.handleNotificationClick(notification.type, notification.title, notification.message)
    }
  }

  handleNotificationClick(type, title, message) {
    this.state._notificationSystem.addNotification({
      title: (<span data-notify="icon" className="pe-7s-gift"></span>),
      message: (<div><b>{ title } </b>&nbsp; { message }</div>),
      level: type,
      position: 'bc',
      autoDismiss: 5,
    });
  }

  render() {
    return (
      <NotificationSystem ref="notificationSystem" style={style} />
    );
  }
}
