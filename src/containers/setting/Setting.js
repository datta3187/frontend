import React, { Component } from 'react';
import { Grid, Container, List, Button, Modal, Input, Form } from 'semantic-ui-react';
import { toast } from "react-toastify"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ChangePassword from '../../components/change_password/ChangePassword'
import * as Api from "../../api/remoteApi";
import './setting.scss';
// import Auth from '../../components/Auth';
import { Redirect } from "react-router";
import * as CustomError from "../../api/handleError";

// const auth = new Auth();

export class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                email: 'N/A',
                uid: 'N/A',
                level: '',
                refid: 'TD123456',
                isParentOpen: false
            },
            qr: null,
            code: null,
            googleAuth: false,
            passwordModal: false
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    setCodeValue(field, e) {
        this.setState({ code: e.target.value });
    }

    componentDidMount() {
        let api_url = 'resource/users/me';
        Api.remoteApi(api_url, 'get', {})
            .then(res => {
                this.setState({
                    fields: res,
                    googleAuth: res.otp
                })
            })
            .catch(error =>{
                if(error.response){
                    toast.error(error.response.data.errors);
                }
                else{
                    toast.error(""+ error);
                }
            });
    }

    componentWillMount() {
        let api_url = 'resource/otp/generate_qrcode';
        Api.remoteApi(api_url, 'post', {})
            .then(res => {
                this.setState({
                    qr: res.data.barcode
                })
            })
            .catch(error => {
                // CustomError.handle(error)
            })
    }

    verifyGoogleAuth = (e) => {
        e.preventDefault();
        let api_url = (this.state.googleAuth ? 'resource/otp/disable' : 'resource/otp/enable');
        let msg = (this.state.googleAuth ? 'Disable' : 'Enable');
        let googleAuthStatus = !(this.state.googleAuth);
        console.log("data :" + this.state.code);
        Api.remoteApi(api_url, 'post', { code: this.state.code })
            .then(res => {
                console.log("Before:" + this.state.googleAuth);
                this.setState({ googleAuth: googleAuthStatus, code: '', isParentOpen: false });
                toast.success(msg);
                console.log("After:" + this.state.googleAuth);
            })
            .catch(error => {
                CustomError.handle(error)
            })
    }

    changePasswordEvent = () => {
        this.setState({ passwordModal: false })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: this.state.redirect_to,
                    state: { from: this.props.location }
                }}
            />
        }

        const user = this.state.fields;
        return (
            <div>
                <Header />

                <Container className="boxWithShadow settingPage">
                    <div className="userFormHeader">
                        <h1>Settings</h1>
                    </div>

                    <Grid divided='vertically' >
                        <Grid.Row columns={1} className="sectionRow section-extoReferralProg">
                            <Grid.Column className="extoRefHeader">
                                <h2>TRADENCE Referral Program</h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3} className="sectionRow highLighted">
                            <Grid.Column>
                                <h3>LAST TRADENCE RATE</h3>
                                <p>0.00000</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>TRADING VOLUME</h3>
                                <p>0.00000</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>TRADENCE BALANCE</h3>
                                <p>0.00000</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2} className="sectionRow sectionTradingAccountsetting">
                            <Grid.Column>
                                <h3>TRADING PROFIT</h3>
                                <p>0.00 TRADENCE</p>
                            </Grid.Column>
                            <Grid.Column>
                                <h3>ACCOUNT SETTINGS</h3>

                                <List divided verticalAlign='middle' className="accSetting">
                                    <List.Item>
                                        <List.Content><strong>Email</strong></List.Content>
                                        <List.Content floated='right'>
                                            {user.email}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><strong>UID</strong></List.Content>
                                        <List.Content floated='right'>
                                            {user.uid}
                                        </List.Content>
                                     </List.Item>
                                    <List.Item>
                                        <List.Content><strong>KYC Status</strong></List.Content>
                                        <List.Content floated='right'>
                                            {user.level != 3 ? 'Unverified' : 'Verified'}
                                        </List.Content>

                                    </List.Item>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            {user.refid}
                                        </List.Content>
                                        <List.Content><strong>Referral ID</strong></List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid className="setting-row">
                            <Grid.Row columns={2} className="settingList emailVerification">
                                <Grid.Column className="settingListdesc">
                                    <b>E-mail Verification</b>
                                    <br />Your email address has been verified successfully, remember and protect this e-mail address, it is the single certificate for your account
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button>Verified</Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2} className="settingList verifyAccount">
                                <Grid.Column className="settingListdesc">
                                    <b>Verify Account</b>
                                    <br />Verify Identity documents for advanced withdraw and deposit options
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button onClick={() => this.props.history.push("/documents")}>Submit</Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2} className="settingList passwordR">
                                <Grid.Column className="settingListdesc">
                                    <b>Password</b>
                                    <br />This password is required for login, please remember it.
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button type="button" onClick={() => this.setState({ passwordModal: true })}>Change</Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2} className="settingList googleAuth">
                                <Grid.Column className="settingListdesc">
                                    <b>Google Authentication</b>
                                    <br />Used for withdrawals and security modifications.
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button type="button" className="disableBtn" onClick={() => this.setState({ isParentOpen: true })}>{this.state.googleAuth ? 'Disable' : 'Enable'}</Button>
                                </Grid.Column>
                            </Grid.Row>

                            {/*<Grid.Row columns={2} className="settingList smsAuth">*/}
                                {/*<Grid.Column className="settingListdesc">*/}
                                    {/*<b>SMS Authentication</b>*/}
                                    {/*<br />Used for withdrawals and security modifications.*/}
                                {/*</Grid.Column>*/}
                                {/*<Grid.Column className="settingListBtn">*/}
                                    {/*<Button onClick={() => this.props.history.push("/phone")}>Enable</Button>*/}
                                {/*</Grid.Column>*/}
                            {/*</Grid.Row>*/}
                        </Grid>
                    </Grid>
                </Container>
                <Footer />

                {/*Google auth enable modal*/}
                <Modal size="small" open={this.state.isParentOpen} className="googleAuthModal">
                    <a href='javascript:void(0)' className="mClose" onClick={() => this.setState({ isParentOpen: false })}><i aria-hidden="true" className="close link icon"></i></a>
                    <Modal.Header>
                        <h3>{this.state.googleAuth ? 'Disable' : 'Enable'} Google Authentication</h3>
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description >

                            {
                                this.state.googleAuth ?
                                    null : <img alt="QR Code" src={"data:image/png;base64," + this.state.qr} />
                            }

                            <Form>
                                <Form.Field>
                                    <Input icon=''
                                        type="text"
                                        onChange={this.setCodeValue.bind(this, "code")}
                                        value={this.state.code}
                                        iconPosition='left'
                                        placeholder='code' />
                                </Form.Field>
                                <Button className="resetButton" onClick={this.verifyGoogleAuth} primary>Verify</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                {/*Change password Modal*/}
                <ChangePassword passModalOpen={this.state.passwordModal} closeModal={this.changePasswordEvent} />
            </div>
        )

    }
}
export default Setting