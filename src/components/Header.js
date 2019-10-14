import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { Container, Icon, Image, Select } from 'semantic-ui-react';
import { fetchLogout } from '../redux/actions/auth';
import { connect } from 'react-redux';
import Buttonn from '../common/buttonn';
const countryOptions = [
    { key: 'af', value: 'af', text: 'UN' },
    { key: 'ax', value: 'ax', text: 'EN' },
   
  ]
const IconNav = () => <Icon link className='navBtn' name='bars' />;

class Headers extends Component {
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
                        <ul className="top-rgt-nav">
                            <li><a href="#">HELP</a></li>
                            <li><a href="#">MARKET</a></li>
                            <li className="whitepaper"><Buttonn buttons='WHITEPAPER' btnDefault="button-comn"></Buttonn></li>
                            <li>
                                <Select placeholder='EN' options={countryOptions} />
                            </li>
                        </ul>
                    </div>

                    <div className={this.state.is_open ? 'ui visible left wide sidebar sideNav displayActive' : 'displayInactive'}>
                        <div className='childDiv'>
                            {
                                !this.state.isAuthenticated &&
                                <div>
                                    <div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                    <Icon disabled name='help circle' />
                                        <Link to="/login">HELP</Link>
                                    </div>
                                    <div className={this.props.activePath == 'register' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                       <Icon disabled name=' upload' />
                                       <Link to="/Register">MARKET</Link>
                                    </div>
                                    <div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>
                                    <Icon disabled name='user circle' />
                                        <Link to="/login">LOGIN</Link>
                                    </div>
                                </div>
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
)(Headers);
