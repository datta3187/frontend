import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'
import { Container } from 'semantic-ui-react';

class LoggedInHeader extends Component {

    render() {
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
                                    <li><Link to="/trading/ethbtc">Exchange</Link></li>
                                    <li><Link to="/signout">Logout</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </ div>
        )
    }
}

export default LoggedInHeader
