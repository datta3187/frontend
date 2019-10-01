import { Component } from 'react';
import Auth from '../../components/Auth'
import { toast } from 'react-toastify';

const auth = new Auth();

class Logout extends Component {

    componentWillMount() {
        auth.logout();
        this.props.history.push("/");
        toast.success('Logout Successfully!')
    }

    render() {
        return null;
    }
}

export default Logout;
