import React, { Component } from 'react';
import {Grid, Container, List, Button, Segment, Divider, Modal, Input, Form} from 'semantic-ui-react';
import { ToastContainer, toast } from "react-toastify"


import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as Api from "../../api/remoteApi";
// import {Form} from "semantic-ui-react/dist/commonjs/collections/Form";

export class Setting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fields: {
                email: 'N/A',
                uid: 'N/A',
                level: '',
                refid: 'EXTO123456',
                isParentOpen: false,
            },
            qr: null,
            code: null
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
                    fields: res
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
        let api_url = 'resource/otp/enable'
        console.log("data :" + this.state.code)
        Api.remoteApi(api_url, 'post', {code: this.state.code})
            .then(res => {
                debugger
                this.setState({isParentOpen: false})
                toast.success("Enabled")
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

    disableGoogleAuth =(e)=> {
        e.preventDefault();

    }

    // googleAuth =(e)=> {
    //     let data = e
    //     (data == 'disable' ? 'resource/otp/verify' : 'resource/otp/enable' );
    // }

    render() {
        const user = this.state.fields;
        return (
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

                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Segment>
                                    E-mail Verification
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button>Verified</Button>
                                            </List.Content>
                                            <List.Content>Your email address has been verified successfully, remember and protect this e-mail address, it is the single certificate for your account</List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                                <Segment>
                                    Verify Account
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button onClick={() => this.props.history.push("/kyc")}>Submit</Button>
                                            </List.Content>
                                            <List.Content></List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                                <Segment>
                                    Password
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button>Change Password</Button>
                                            </List.Content>
                                            <List.Content>This password is required for login, please remember it.</List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    Google Authentication
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button type="button" onClick={() => this.setState({ isParentOpen: true })}>Enable</Button>
                                                {/*<Button type="button" onClick={this.disableGoogleAuth}>Disable</Button>*/}
                                            </List.Content>
                                            <List.Content>Used for withdrawals and security modifications.</List.Content>
                                        </List.Item>
                                    </List>
                                    <Divider section />
                                    SMS Authentication
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button>Enable</Button>
                                            </List.Content>
                                            <List.Content>Used for withdrawals and security modifications.
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Footer />

                {/*Googgle auth modal*/}
                <Modal size="small" open={this.state.isParentOpen} className="forgotPasswordModal">
                    <a className="mClose" onClick={() => this.setState({ isParentOpen: false })}><i aria-hidden="true" className="close link icon"></i></a>
                    <Modal.Header>
                        <h3>Enable Google Authentication</h3>
                    </Modal.Header>

                    <Modal.Content>
                        <Modal.Description >
                            <img alt="QR Code" src={"data:image/png;base64," + this.state.qr} />
                            <Form>
                                <Form.Field>
                                    <Input icon=''
                                           type="text"
                                           onChange={this.setCodeValue.bind(this, "code")}
                                           value={this.state.code}
                                           iconPosition='left'
                                           placeholder='code' />
                                    {/*<span style={{ color: "red" }}>*/}
                                            {/*{this.state.errors["email"]}*/}
                                        {/*</span>*/}
                                </Form.Field>
                                <Button className="resetButton" onClick={this.verifyGoogleAuth} primary>Verify</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
export default Setting