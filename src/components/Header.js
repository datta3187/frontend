import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'
import { Container } from 'semantic-ui-react';
import Auth from './Auth'

const auth = new Auth();

class Header extends Component {

    render() {
        let link;

        if (auth.isAuthenticated()) {
            link = <Link to="/logout">Logout</Link>
        } else {
            link = <Link to="/login">Login</Link>
        }

        return (
            <div className={`beforeLoginHeader  ${this.props.abc}`} >
                <Container>
                    <div className="header">
                        <div className="headerLeft">
                            <Link to="/login">Logo Goes Here</Link>
                        </div>
                        <div className="headerRight">
                            <nav>
                                <ul className="r-nav">
                                    <li><Link to="/trading/ETH_BTC">Trade</Link></li>
                                    <li className="hasLoginBtn">{link}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </ div>
        )
    }
}


export default Header
