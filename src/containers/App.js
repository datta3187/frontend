import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Login from './user/Login';
import Register from './register/Register';
import EmailVerify from './register/EmailVerify';
import EmailConfirmation from './emailConfirmation/EmailConfirmation';
import ResetPassword from './resetpassword/ResetPassword';
import Kyc from './kyc/Kyc';
import Exchange from './trade/Exchange';
import Profile from './profile/Profile';
import Setting from './setting/Setting';
import Phone from './phone/Phone';
import { toast, ToastContainer } from 'react-toastify';
import NotFound from './errors/NotFound';
import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import { fetchUser } from '../redux/actions/user';
import WalletPage from './WalletPage';
import DocumentList from './kyc/DocumentList';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { isFetching, user } = this.props;
        let isAuthenticated = false;
        if (user) {
            isAuthenticated = user.email && user.state === 'active';
        }
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/trading/:market" component={Exchange} />
                    <Route path="/email-confirm/:token" exact component={EmailConfirmation} />
                    <Route path="/password-reset/:token" exact component={ResetPassword} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/email-verification" exact component={EmailVerify} />

                    <PrivateRoute path="/wallets" component={WalletPage} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PrivateRoute path="/documents" component={DocumentList} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PrivateRoute path="/settings" component={Setting} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PrivateRoute path="/phone" component={Phone} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PrivateRoute path="/kyc" component={Kyc} isAuthenticated={isAuthenticated} isLoading={isFetching} />

                    <Route component={NotFound} />
                </Switch>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data,
        isFetching: state.user.isFetching
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
