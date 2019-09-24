import React, { Component } from 'react'
import { Container, Button, Checkbox, Form, Input, Image, Modal, Transition } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {reset_password_token: '', password: '', confirm_password: '', lang: 'EN'},
            errors: {reset_password_token: '', password: '', confirm_password: ''}
        }
    }

    

    render() {
        return (
            <div>
                <Header />
                <Container className="boxWithShadow userForms">
                    <div className="userFormHeader">
                        <h1>Reset Password</h1>
                        <p>Password must contain one lowercase letter, one number, and be  atleast 8 characters long</p>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>New Password</label>
                            <Input icon='lock'
                                type='password'
                                onChange={this.setFormValue.bind(this, "password")}
                                onKeyUp={this.handleSignupKeyup.bind(this, "password")}
                                iconPosition='left'
                                placeholder='Password' />
                            <span style={{ color: "red" }}>
                                {this.state.errors["password"]}
                            </span>
                        </Form.Field>

                        <Form.Field>
                            <label>Confirm Password</label>
                            <Input icon='lock'
                                type='password'
                                onChange={this.setFormValue.bind(this, "password")}
                                onKeyUp={this.handleSignupKeyup.bind(this, "password")}
                                iconPosition='left'
                                placeholder='Password' />
                            <span style={{ color: "red" }}>
                                {this.state.errors["password"]}
                            </span>
                        </Form.Field>

                        <div className="form-captcha"></div>
                        <div className="form-button">
                            <Button onClick={this.signInWithPeatio} primary>Primary</Button>
                            <p>Don't have an Account? <Link to="/Register">Sign Up Now</Link></p>
                        </div>
                    </Form>

                </Container>
                <Footer />
            </div >
        )
    }
}

export default ResetPassword
