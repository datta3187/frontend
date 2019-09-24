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
    // componentDidMount()
    // {
    //     let api_url = 'resource/users/me';
    //     Api.remoteApi(api_url, 'get', {})
    //         .then(res => {
    //             this.setState({
    //                 fields: res
    //             })
    //         })
    //         .catch(error =>{
    //             if(error.response){
    //                 toast.error(error.response.data.errors[0]);
    //             }
    //             else{
    //                 toast.error(""+ error);
    //             }
    //         })
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
                        <h1>Detail</h1>
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
                                                <button type="button" onClick={() => this.setState({ isParentOpen: true })}>Enable</button>
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
                        <Modal.Description>
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