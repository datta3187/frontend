import React, { Component } from 'react';
import { Grid, Container, List, Button, Segment, Divider, Modal, Input, Form } from 'semantic-ui-react';
import { ToastContainer, toast } from "react-toastify"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ChangePassword from '../../components/change_password/ChangePassword'
import * as Api from "../../api/remoteApi";
import LoginGuard from "../../components/login_guard/LoginGuard";
import './setting.scss'

export class Setting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fields: {
                email: 'N/A',
                uid: 'N/A',
                level: '',
                refid: 'EXTO123456',
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

    setCodeValue(field, e){
        this.setState({ code: e.target.value });
    }


    //
    componentDidMount()
    {
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
                    toast.error(error.response.data.errors[0]);
                }
                else{
                    toast.error(""+ error);
                }
            })
    }

    componentWillMount()
    {
        let api_url = 'resource/otp/generate_qrcode';
        Api.remoteApi(api_url, 'post', {})
            .then(res => {
                this.setState({
                    qr: res.data.barcode
                })
            })
            .catch(error =>{
                if(error.response){
                    toast.error(error.response.data.errors[0]);
                }
                else{
                    toast.error(""+ error);
                }
            })
    }

    verifyGoogleAuth =(e)=> {
        e.preventDefault();
        let api_url = ( this.state.googleAuth ? 'resource/otp/disable' :'resource/otp/enable');
        let msg = (this.state.googleAuth ? 'Disable' : 'Enable' );
        let googleAuthStatus = !(this.state.googleAuth);
        console.log("data :" + this.state.code);
        Api.remoteApi(api_url, 'post', {code: this.state.code})
            .then(res => {
                console.log("Before:" + this.state.googleAuth);
                this.setState({googleAuth: googleAuthStatus, code: '', isParentOpen: false});
                toast.success(msg);
                console.log("After:" + this.state.googleAuth);
            })
            .catch(error =>{
                if(error.response){
                    toast.error(error.response.data.errors[0]);
                }
                else{
                    toast.error(""+ error);
                }
            })
    }

    changePasswordEvent =()=> {
        this.setState({passwordModal:false})
    }

    render() {
        const user = this.state.fields;
        return (
            <LoginGuard>
                <div>
                    <ToastContainer
                        enableMultiContainer
                        position={toast.POSITION.TOP_RIGHT}
                    />
                    <Header />

                    <Container className="boxWithShadow userForms">
                        <div className="userFormHeader">
                            <h1>EXTO Referral Program</h1>
                        </div>

                    <Grid divided='vertically'>

                        <Grid.Row columns={3}>
                            <Grid.Column>
                                LAST EXTO RATE
                                0.00000
                    </Grid.Column>
                            <Grid.Column>
                                TRADING VOLUME
                                0.00000
                    </Grid.Column>
                            <Grid.Column>
                                EXTO BALANCE
                                0.00000
                    </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                TRADING PROFIT  0.00 EXTO
                    </Grid.Column>
                            <Grid.Column>
                                ACCOUNT SETTINGS

                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                {user.email}
                                            </List.Content>
                                            <List.Content>Email</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                {user.uid}
                                            </List.Content>
                                            <List.Content>UID</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                {user.level!=3? 'Unverified' : 'Verified' }
                                            </List.Content>
                                            <List.Content>KYC Status</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                {user.refid}
                                            </List.Content>
                                            <List.Content>Referral ID</List.Content>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>

                        <Grid>
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
                                    <br />
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button onClick={() => this.props.history.push("/kyc")}>Submit</Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2} className="settingList passwordR">
                                <Grid.Column className="settingListdesc">
                                    <b>Password</b>
                                    <br />This password is required for login, please remember it.
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button type="button" onClick={() => this.setState({ passwordModal: true })}>Change Password</Button>
                                    {/*<Button type="button" className="disableBtn" onClick={()=>this.changePasswordEvent()}>Change Password</Button>*/}

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

                            <Grid.Row columns={2} className="settingList smsAuth">
                                <Grid.Column className="settingListdesc">
                                    <b>SMS Authentication</b>
                                    <br />Used for withdrawals and security modifications.
                                </Grid.Column>
                                <Grid.Column className="settingListBtn">
                                    <Button>Enable</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Grid>
                    </Container>
                    <Footer />

                    {/*Googgle auth enable modal*/}
                    <Modal size="small" open={this.state.isParentOpen} className="forgotPasswordModal">
                        <a className="mClose" onClick={() => this.setState({ isParentOpen: false })}><i aria-hidden="true" className="close link icon"></i></a>
                        <Modal.Header>
                            <h3>{this.state.googleAuth ? 'Disable' : 'Enable'} Google Authentication</h3>
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description >

                                {
                                    this.state.googleAuth ?
                                        null : <img  alt="QR Code" src={"data:image/png;base64," + this.state.qr} />
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
                    <ChangePassword passModalOpen={this.state.passwordModal} closeModal={this.changePasswordEvent}/>
                </div>
            </LoginGuard>
        )
    }
}
export default Setting