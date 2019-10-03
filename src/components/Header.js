import React, { Component } from 'react';
import { Link, Button } from 'react-router-dom'
import './header.scss'
import { Container, Icon, Menu, Segment, Image} from 'semantic-ui-react';
import Auth from './Auth'
import signin_img from "../images/signin.svg"
import signout_img from "../images/signout.svg"

const auth = new Auth();
const IconNav = () => <Icon link  className='navBtn' name='bars' />

const leftSideSegment = () => (
    <Segment >Disabled content</Segment>
)

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_open: false,
            isLoggedIn: auth.isAuthenticated()
        }
    }

    openLeftNav =()=> {
        this.setState({
            is_open: !this.state.is_open
        })
    };

    render() {
        return (
            <div className={`beforeLoginHeader  ${this.props.abc}`} >
                <Container>
                    <div className="header">
                        <div className="headerLeft">
                            <div onClick={this.openLeftNav}>
                                <IconNav />
                            </div>
                            <Link to="/login">Logo Goes Here</Link>
                        </div>
                    </div>

                    <div className={ this.state.is_open ? "ui visible left wide sidebar sideNav displayActive":"displayInactive"}>
                        <div className="childDiv">
                            {
                                !(this.state.isLoggedIn)? (
                                    <div>
                                        <div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                            <Image src={signin_img} />
                                            <Link to="/login">Sign In</Link>
                                        </div>
                                        <div className={this.props.activePath == 'register' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                            <Image src={signout_img} />
                                            <Link to="/Register">Sign Up</Link>
                                        </div>
                                    </div>
                                ) : (
                                        <div className='sideNavChild'>
                                            <Image src={signout_img} />
                                            <Link to="/logout">Logout</Link>
                                        </div>
                                    )
                            }
                            
                            <div className={this.props.activePath == 'trade' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                <Icon name="signal" />
                                <Link to="/trading/ETH_BTC">Trade</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )

    }
}

export default Header
