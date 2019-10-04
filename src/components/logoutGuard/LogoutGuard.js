import React from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import Auth from '../Auth'

const auth = new Auth();

class LogoutGuard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    location: {},
    children: null,
    user: {}
  };

  render() {
    const { children, location } = this.props;

    if (!auth.isAuthenticated()) {
      return children;
    } else {
      return (
          <Redirect
              to={{
                pathname: "/settings",
                state: {from: location}
              }}
          />
      );
    }
  }
}

export default LogoutGuard;
