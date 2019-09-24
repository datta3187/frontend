import React, {Component} from 'react';

class Logout extends Component {

    componentWillMount() {
        localStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return null;
    }
}

export default Logout;
