import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import {Button, Container, Select} from 'semantic-ui-react';
import { fetchLogout } from '../redux/actions/auth';
import { connect } from 'react-redux';

const countryOptions = [
    { key: 'af', value: 'af', text: 'UN' },
    { key: 'ax', value: 'ax', text: 'EN' },
   
  ]

class Headers extends Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        let isAuthenticated = false;
        if (user) {
            isAuthenticated = user.email && user.state === 'active';
        }
        this.state = {
            isAuthenticated: isAuthenticated
        };
    }

    logoutUser(){
        this.props.fetchLogout();
    };

    render() {
        return (
            <div className={`beforeLoginHeader bg ${this.props.abc}`} >
                <Container>
                    <div className="header">
                        <div className="headerLeft">
                            <Link to="/">Logo Goes Here</Link>
                           
                        </div>
                        <ul className="top-rgt-nav">
                            <li>
                                <Link to="/">HELP</Link>
                            </li>
                            <li>
                                <Link to="/trading/ETH_BTC">MARKET</Link>
                            </li>

                            {
                                this.state.isAuthenticated ?
                                    <li className="whitepaper"><Button className="button-comn" onClick={ () => this.logoutUser() }>LOGOUT</Button></li> :
                                    <li className="whitepaper">
                                        <Link className="button-comn" to="/login">LOGIN</Link>
                                    </li>
                            }
                            <li>
                                <Select placeholder='EN' options={countryOptions} />
                            </li>
                        </ul>
                    </div>

                    {/*<div className={this.state.is_open ? 'ui visible left wide sidebar sideNav displayActive' : 'displayInactive'}>*/}
                        {/*<div className='childDiv'>*/}
                            {/*{*/}
                                {/*!this.state.isAuthenticated &&*/}
                                {/*<div>*/}
                                    {/*<div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>*/}
                                    {/*<Icon disabled name='help circle' />*/}
                                        {/*<Link to="/login">HELP</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className={this.props.activePath == 'register' ? 'sideNavChild route-selected' : 'sideNavChild'}>*/}
                                       {/*<Icon disabled name=' upload' />*/}
                                        {/*<Link to="/trading/ETH_BTC">MARKET</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className={this.props.activePath == 'login' ? 'sideNavChild route-selected' : 'sideNavChild'}>*/}
                                    {/*<Icon disabled name='user circle' />*/}
                                        {/*<Link to="/login">LOGIN</Link>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*}*/}

                        {/*</div>*/}

                        {/*{*/}
                            {/*this.state.isAuthenticated &&*/}
                            {/*<div className='sideNavChild'>*/}
                                {/*<Image src={require('../images/logout.svg')} />*/}
                                {/*<Link onClick={this.logoutUser}>Logout</Link>*/}
                            {/*</div>*/}
                        {/*}*/}


                    {/*</div>*/}
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
