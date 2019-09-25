import React, { Component } from 'react';
import {Grid, Container, List, Button, Segment, Divider, Modal, Input, Form} from 'semantic-ui-react';
import { ToastContainer, toast } from "react-toastify"


import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as Api from "../../api/remoteApi";
// import {Form} from "semantic-ui-react/dist/commonjs/collections/Form";

var QRCode = require('qrcode.react');

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
            }
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
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
                                            <List.Content>Your email adress has been verified successfully, remember and protect this e-mail address, it is the single certificate for your account</List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                                <Segment>
                                    Verify Account
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button>Submit</Button>
                                            </List.Content>
                                            <List.Content>Lena</List.Content>
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
                                                {/*<Button onClick={() => this.setState({ isParentOpen: true })}>Enable</Button>*/}
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
                            <QRCode value="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" />
                            <Form>
                                <Form.Field>
                                    <Input icon=''
                                           type="text"
                                           onChange={this.setFormValue.bind(this, "code")}
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