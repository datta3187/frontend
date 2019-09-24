import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import Login from './containers/user/Login'
import Register from './containers/register/Register'
import EmailVerify from './containers/register/EmailVerify'
import EmailConfirmation from './containers/emailConfirmation/EmailConfirmation'
import ResetPassword from './containers/resetpassword/ResetPassword'
import Kyc from './containers/kyc/Kyc'
import Exchange from './containers/exchange/Exchange'
import Profile from './containers/profile/Profile'
import Setting from './containers/setting/Setting'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/email-verification" exact component={EmailVerify} />
            <Route path="/profile" component={Profile} />
            <Route path="/kyc" component={Kyc} />
            <Route path="/exchange" component={Exchange} />
            <Route path="/email-confirm/:token" exact component={EmailConfirmation} />
            <Route path="/resetpassword" exact component={ResetPassword} />
            <Route path="/settings" component={Setting} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
