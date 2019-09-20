import React, { Component } from 'react'
import {Container, Form, Input, Checkbox, Button, Dropdown, Dimmer, Loader} from 'semantic-ui-react'
import {toast, ToastContainer} from "react-toastify";
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Link} from "react-router-dom";

class TwoFactor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: { email: '', password: '', conPassword: '', refid: 'ID44682EBC54', terms: '' },
            errors: { email: '', password: '', conPassword: '', refid: '', terms: '' },
            loading: false,
            isTermSelected: false
        }
    }

    render() {

        return (
            < div >
                {this.state.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />


                <Header />
                <Container className="boxWithShadow userForms">
                    <div className="userFormHeader">
                        <h1>Sign Up</h1>
                        <p>Enter your details to register with us</p>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>Email</label>
                            <Input icon='mail'
                                   type="email"
                                   onChange={this.setFormValue.bind(this, "email")}
                                   onKeyUp={this.handleSignupKeyup.bind(this, "email")}
                                   iconPosition='left'
                                   placeholder='Email' />
                            <span style={{ color: "red" }}>
                                {this.state.errors["email"]}
                            </span>
                        </Form.Field>
                        <div className="confirmPw">
                            <Form.Field>
                                <label>Password</label>
                                <Input icon='lock' type="password"
                                       onChange={this.setFormValue.bind(this, "password")}
                                       onKeyUp={this.handleSignupKeyup.bind(this, "password")}
                                       iconPosition='left' placeholder='Password' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["password"]}
                                </span>
                            </Form.Field>
                            <Form.Field>
                                <label>Confirm Password</label>
                                <Input icon='lock' type="password"
                                       onChange={this.setFormValue.bind(this, "conPassword")}
                                       onKeyUp={this.handleSignupKeyup.bind(this, "conPassword")}
                                       iconPosition='left' placeholder='Password' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["conPassword"]}
                                </span>
                            </Form.Field>
                        </div>
                        <Form.Field>
                            <label>Referral Id</label>
                            <Input icon='mail' type="text"
                                   value={this.state.fields.refid}
                                   onChange={this.setFormValue.bind(this, "refid")}
                                   onKeyUp={this.handleSignupKeyup.bind(this, "refid")}
                                   iconPosition='left' placeholder='Referral Id' />
                        </Form.Field>
                        <Form.Field className="userFormAth">
                            <Checkbox onClick={this.aggreed} label="I agree to AnXchange' s Terms of Use" />
                            <span style={{ color: "red" }}>
                                {this.state.errors["terms"]}
                            </span>
                        </Form.Field>
                        <div className="form-captcha"></div>
                        <div className="form-button">
                            <Button type='submit' onClick={this.signupWithPeatio} primary>Sign Up</Button>
                            <p>Already have an account?  <Link to="/login">Sign In</Link></p>
                        </div>
                    </Form>
                </Container>
                {/* <h2>{JSON.stringify(identity)}</h2> */}
                <Footer />
            </div >
        )
    }
}
