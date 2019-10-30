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
import PublicRoute from '../components/PublicRoute';
import { fetchUser } from '../redux/actions/user';
import WalletPage from './WalletPage';
import DocumentList from './kyc/DocumentList';
import TwoFactorAuth from './TwoFactorAuth'
import ProdProfile from  './prod/profile/Profile'
import ProdHome from './prod/home/Home';

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
                    <PublicRoute path="/" exact component={ProdHome} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    {/*<PublicRoute path="/" exact component={Home} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    <PublicRoute path="/login" exact component={Login} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    {/*<PublicRoute path="/trading/:market" component={Exchange} />*/}
                    <PublicRoute path="/email-confirm/:token" exact component={EmailConfirmation} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PublicRoute path="/password-reset/:token" exact component={ResetPassword} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PublicRoute path="/register" exact component={Register} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    <PublicRoute path="/email-verification" exact component={EmailVerify} isAuthenticated={isAuthenticated} isLoading={isFetching} />
                    {/*<PublicRoute path="/two-factor" component={TwoFactorAuth} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}

                    {/*<PrivateRoute path="/wallets" component={WalletPage} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    {/*<PrivateRoute path="/documents" component={DocumentList} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    {/*<PrivateRoute path="/settings" component={Setting} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    {/*<PrivateRoute path="/phone" component={Phone} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    {/*<PrivateRoute path="/profile" component={Profile} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}
                    {/*<PrivateRoute path="/kyc" component={Kyc} isAuthenticated={isAuthenticated} isLoading={isFetching} />*/}

                    <PublicRoute path="/profile" exact component={ProdProfile} isAuthenticated={isAuthenticated} isLoading={isFetching} />

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

export default connect(mapStateToProps,mapDispatchToProps)(App);
