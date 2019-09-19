import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import Login from './containers/user/Login'
import Register from './containers/register/Register'
import EmailConfirmation from './containers/emailConfirmation/EmailConfirmation'
import ResetPassword from './containers/resetpassword/ResetPassword'
import Kyc from './containers/kyc/Kyc'
import Exchange from './containers/exchange/Exchange'
import Profile from './containers/profile/Profile'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/kyc" component={Kyc} />
            <Route path="/exchange" component={Exchange} />
            <Route path="/emailConfirmation/:id" exact component={EmailConfirmation} />
            <Route path="/resetpassword" exact component={ResetPassword} />
            {/* <Route path="/" exact component={PostList} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
