import React, {Component} from 'react';
import Auth from '../../components/Auth'

const auth = new Auth();

class Logout extends Component {

    componentWillMount() {
        auth.logout();
        this.props.history.push("/");
    }

    render() {
        return null;
    }
}

export default Logout;
