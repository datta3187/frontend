import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { Container, Icon, Image } from 'semantic-ui-react';
import { fetchLogout } from '../redux/actions/auth';
import { connect } from 'react-redux';

const IconNav = () => <Icon link className='navBtn' name='bars' />;

class Header extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        let isAuthenticated = false;
        if (user) {
            isAuthenticated = user.email && user.state === 'active';
        }
        this.state = {
            is_open: false,
            isAuthenticated: isAuthenticated
        };
    }

    openLeftNav = () => {
        this.setState({
            is_open: !this.state.is_open
        });
    };

    logoutUser = () => {
        this.props.fetchLogout();
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

                    <div className={this.state.is_open ? 'ui visible left wide sidebar sideNav displayActive' : 'displayInactive'}>
                        <div className='childDiv'>
                            {
                                !this.state.isAuthenticated &&
                                <div>
                                    <div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                        <Image src={require('../images/signin.svg')} />
                                        <Link to="/login">Sign In</Link>
                                    </div>
                                    <div className={this.props.activePath == 'register' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                        <Image src={require('../images/signup.svg')} />
                                        <Link to="/Register">Sign Up</Link>
                                    </div>
                                </div>
                            }

                            <div className={this.props.activePath == 'trade' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                <Image src={require('../images/trade.svg')} />
                                <Link to="/trading/ETH_BTC">Trade</Link>
                            </div>

                            {
                                this.state.isAuthenticated && (
                                    <React.Fragment>
                                        <div className={this.props.activePath == 'wallets' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                            <Image src={require('../images/wallet.svg')} />
                                            <Link to="/wallets">Wallets</Link>
                                        </div>
                                        <div className={this.props.activePath == 'orders' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                            <Image src={require('../images/orders.svg')} />
                                            <Link to="/wallets">Orders</Link>
                                        </div>
                                    </React.Fragment>
                                )
                            }

                        </div>

                        {
                            this.state.isAuthenticated &&
                            <div className='sideNavChild'>
                                <Image src={require('../images/logout.svg')} />
                                <Link onClick={this.logoutUser}>Logout</Link>
                            </div>
                        }


                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogout: () => dispatch(fetchLogout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
