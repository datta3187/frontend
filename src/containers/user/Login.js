import React, { Component } from 'react'
import { Container, Button, Checkbox, Form, Input, Image, Modal, Transition } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as loginApi from "../../api/loginApi";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './User.scss'
import Auhenticate from '../../components/Auhenticate/Auhenticate';
import { ToastContainer, toast } from "react-toastify"
import { Dimmer, Loader } from "semantic-ui-react"
import "react-toastify/dist/ReactToastify.css"
import ReCAPTCHA from "react-google-recaptcha";
import config from "../../config";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { email: '', password: '' },
            errors: { email: '', password: '', captcha_response: '' },
            forfields: { email: '' },
            loading: false,
            isParentOpen: false
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });

        let forfields = this.state.forfields;
        forfields[field] = e.target.value;
        this.setState({ forfields });
    }

    handleSignupKeyup(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = "";
            return { errors };
        });
    }


    //signIn form validation
    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Password is required.";
        }

        if (
            typeof fields["password"] !== "undefined" &&
            fields["password"] !== ""
        ) {
            if (
                !fields["password"].match(
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
                )
            ) {
                formIsValid = false;
                errors["password"] =
                    "Password should have one number and one special character,minimum 8 characters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email is required";
        }

        if (typeof fields["email"] !== "undefined" && fields["email"] !== "") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (config.captchaPolicy != 'disabled') {
            if (!fields["captcha_response"]) {
                formIsValid = false;
                errors["captcha_response"] = "Verify the captcha";
            }
        }

        if (!formIsValid) {
            this.setState({ loading: false });
        }

        this.setState({ errors: errors });
        return formIsValid;
    };


    //Forgot form validation
    handleForgotValidation = () => {
        let forfields = this.state.forfields;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!forfields["email"]) {
            formIsValid = false;
            errors["email"] = "Email is required";
        }

        if (typeof forfields["email"] !== "undefined" && forfields["email"] !== "") {
            let lastAtPos = forfields["email"].lastIndexOf("@");
            let lastDotPos = forfields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    forfields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    forfields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    };

    // button
    signInWithPeatio = e => {
        e.preventDefault();
        this.setState({ loading: true });
        if (this.handleValidation()) {
            loginApi.onLogin(this.state.fields)
                .then(res => {
                    if (res.state == 'pending') {
                        toast.error("e-mail verification pending");
                    } else {
                        localStorage.setItem("user", JSON.stringify(res));
                        toast.success("Logged in successfully");
                        this.setState({ loading: false });
                        this.props.history.push("/profile")
                    }
                })
                .catch(error => {
                    this.setState({ loading: false });
                    if(error.response){
                        toast.error(error.response.data.errors[0]);
                    }
                    else{
                        toast.error(""+ error);
                    }

                });

        }
    };

    forgotPassword = e => {
        e.preventDefault();

        if (this.handleForgotValidation()) {
            console.log("data :" + this.state.forfields)
            loginApi.forgotPasswordApi(this.state.forfields)
                .then(res => {
                    this.setState({isParentOpen: false})
                    toast.success("Password reset link has been sent on your email.")
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
        else {
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        if(this.props.location.state){
            if(this.props.location.state.email_verified){
                toast.success(this.props.location.state.msg)
            }
            else {
                toast.error(this.props.location.state.msg)
            }
        }
    }

    handleCaptcha = e => {
        let fields = this.state.fields;
        fields.captcha_response = e;
        this.setState({fields});

        let errors = this.state.errors;
        errors.captcha_response = '';
        this.setState({errors});
    };

    render() {
        return (
            <Auhenticate>
                <div>
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
                            <h1>Sign in</h1>
                            <p>Enter your details to Email id and password to access your account</p>
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

                            <Form.Field>
                                <label>Password</label>
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

                            <Form.Field className="userFormAth">
                                <Checkbox label='Remember Me' />
                                <a onClick={() => this.setState({ isParentOpen: true })}>Forgot Password?</a>
                                {/* <Modal size="small" open={this.state.isParentOpen} trigger={<a>Forgot Password?</a>} className="forgotPasswordModal"> */}

                            </Form.Field>

                            {(config.captchaPolicy != 'disabled') && (
                                <div className="form-captcha">
                                    <ReCAPTCHA
                                        sitekey={config.recatpchaSiteKey}
                                        onChange={this.handleCaptcha}
                                    />
                                    <span style={{color: "red"}}>
                                        {this.state.errors["captcha_response"]}
                                    </span>
                                </div>
                            )}
                            <div className="form-button">
                                <Button onClick={this.signInWithPeatio} primary>Sign In</Button>
                                <p>Don't have an Account? <Link to="/Register">Sign Up Now</Link></p>
                            </div>
                        </Form>

                    </Container>
                    <Footer />
                    {/* Forgot Password Modal */}


                    <Modal size="small" open={this.state.isParentOpen} className="forgotPasswordModal">
                        <a className="mClose" onClick={() => this.setState({ isParentOpen: false })}><i aria-hidden="true" className="close link icon"></i></a>
                        <Modal.Header>
                            <h3>Forgot Password?</h3>
                            <span>We just need your registred email address to send you password reset</span>
                        </Modal.Header>

                        <Modal.Content>
                            <Modal.Description>
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
                                    <Button className="resetButton" onClick={this.forgotPassword} primary>Reset Password</Button>
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>

                </div >
            </Auhenticate>
        )
    }
}

export default Login
