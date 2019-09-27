import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import Login from './containers/user/Login'
import Logout from './containers/user/Logout'
import Register from './containers/register/Register'
import EmailVerify from './containers/register/EmailVerify'
import EmailConfirmation from './containers/emailConfirmation/EmailConfirmation'
import ResetPassword from './containers/resetpassword/ResetPassword'
import Kyc from './containers/kyc/Kyc'
import Exchange from './containers/exchange/Exchange'
import Profile from './containers/profile/Profile'
import Setting from './containers/setting/Setting'
import Phone from './containers/phone/Phone'
import {toast, ToastContainer} from "react-toastify";
import NotFound from "./containers/errors/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/phone" component={Phone} />
            <Route path="/register" component={Register} />
            <Route path="/email-verification" exact component={EmailVerify} />
            <Route path="/profile" component={Profile} />
            <Route path="/kyc" component={Kyc} />
            <Route path="/trading/:market" component={Exchange} />
            <Route path="/email-confirm/:token" exact component={EmailConfirmation} />
            <Route path="/password-reset/:token" exact component={ResetPassword} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/settings" component={Setting} />
            <Route component={NotFound}/>
          </Switch>
          <ToastContainer
              enableMultiContainer
              position={toast.POSITION.TOP_RIGHT}
          />
        </div>
      </Router>
    );
  }
}

export default App;
