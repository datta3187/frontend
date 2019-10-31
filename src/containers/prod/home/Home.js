import React, { Component } from 'react';
import '../css/common.scss';
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div className="referral">
            <React.Fragment>
                <div className="topBanner"></div>
                <div className="bottomBtn">
                    <div className="ui container bottomBtnin">
                        <Link className="signup" to="/Register">Sign up and win!</Link>
                        <Link className="signin" to="/login">Sign in</Link>
                    </div>
                </div>
            </React.Fragment>
            </div>
        );
    }
}

export default Home
