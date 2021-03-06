import React, { Component } from 'react';
import '../css/common.scss';
import { Button, Image, Grid } from "semantic-ui-react";
import ShareReferral from "../profile/ShareReferral";
import { connect } from "react-redux";
import { fetchLogout } from '../../../redux/actions/auth';
import { Link } from 'react-router-dom';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            referralModal: false
        }
    }

    changeReferralModalEvent = () => {
        this.setState({ referralModal: false })
    };

    logoutUser = () => {
        this.props.fetchLogout();
    };

    render() {
        let user = this.props.user
        return (
            <div className="bgprofile referral">
                <div className="ui fluid container">
                    <Grid columns={2} className="topsec_logo">
                        <Grid.Row className="logo_outer">
                            <Grid.Column >
                                <a href="#" className="logo"></a>
                            </Grid.Column>
                            <Grid.Column className="logout_outer">
                                <Link className="logout" onClick={ () => this.logoutUser() }>LOGOUT</Link>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </div>

                <div className="ui fluid container topimgSec">
                    <Image src={require('../../../images/prod/deskimg.png')} />
                    <h3>NUMBER OF REFERRED USERS <br/><span>{ user.referred }</span></h3>
                    <h3>RANK IN TRADENCE <br/><span>{ user.rank }</span></h3>
                    <h3>NUMBER OF USERS LEADING YOU <br/><span>{ user.leading_users }</span></h3>
                    <h3>NUMBER OF USERS TRAILING YOU <br/><span>{ user.trailing_users }</span></h3>
                    <Button type="button" onClick={() => this.setState({ referralModal: true })}>BUMP ME UP THE QUEUE</Button>
                </div>

                <div className="RankSec">
                    <h4>PRIZES AT STAKE</h4>
                    <table className="ui unstackable table">
                        <thead>
                        <tr>
                            <th>RANK</th>
                            <th>Giveaway</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#1</td>
                            <td>4D3N TRIP TO EL NIDO</td>
                        </tr>
                        <tr>
                            <td>#2-10</td>
                            <td>HUAWEI P30</td>
                        </tr>
                        <tr>
                            <td>#11-110</td>
                            <td>WELLNESS PACKAGE</td>
                        </tr>
                        <tr>
                            <td>#111-1111</td>
                            <td>WELLNESS PRODUCTS</td>
                        </tr>
                        <tr>
                            <td>#1111+</td>
                            <td>TOKENS WORTH $5</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Single???s Day Contest Terms and Conditions</p>
                    <ul>
                        <li>This contest is open to all adult 18 of age and above from the period of 1st November to
                            11th November 2019.
                        </li>
                        <li>All winners will be noti???ed via mobile and/or email noti???cation upon closing of the contest
                            and veri???cation of eligible contestants
                        </li>
                        <li>All prizes redemption must be claimed no later than 31 December 2019. These prizes are not
                            transferable and not exchangeable for cash.
                        </li>
                        <li>Organizer reserve the right to cancel or change the prizes as and when deemed necessary
                            without having to give any reason(s).
                        </li>
                    </ul>
                </div>
                <ShareReferral passModalOpen={this.state.referralModal} closeModal={this.changeReferralModalEvent} />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
