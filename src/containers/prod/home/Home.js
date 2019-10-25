import React, { Component } from 'react';
import './home.scss';
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                <div className="topBanner"></div>
                <div className="bottomBtn">
                    <div className="ui container bottomBtnin">
                        <Link className="signup" to="/Register">Sign up and win!</Link>
                        <Link className="signin" to="/login">Sign in</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
