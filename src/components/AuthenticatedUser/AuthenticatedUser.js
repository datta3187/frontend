import React from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

class AuthenticatedUser extends React.Component {
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
    var user = JSON.parse(localStorage.getItem("User"));
    console.log("LOCALE", user);
    console.log("CHIL", children);
    console.log("Location", location);
    if (user != null) {
      return children;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/Pusher",
            state: { from: location }
          }}
        />
      );
    }
  }
}
export default AuthenticatedUser;
