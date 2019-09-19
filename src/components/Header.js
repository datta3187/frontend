import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'
import { Container } from 'semantic-ui-react';

class Header extends Component {

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
                                    <li>Exchange</li>
                                    <li className="hasLoginBtn"><Link to="/login">Login</Link></li>
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