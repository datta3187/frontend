import React from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
class Authenticate extends React.Component {
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
    var user = JSON.parse(localStorage.getItem("user"));

    if (user == null) {
      return children;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/kyc",
            state: { from: location }
          }}
        />
      );
    }
  }
}
export default Authenticate;
