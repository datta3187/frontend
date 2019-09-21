import React, { Component } from 'react'
import { Container, Form, Input, Checkbox, Button, Dropdown } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import * as loginApi from "../../api/loginApi"
import { ToastContainer, toast } from "react-toastify"
import { Dimmer, Loader } from "semantic-ui-react"
import "react-toastify/dist/ReactToastify.css";

// const CAPTCHA_NAME = 'demoCaptcha';




class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: { email: '', password: '', conPassword: '', refid: 'IDAEBDF1468B', terms: '' },
            errors: { email: '', password: '', conPassword: '', refid: '', terms: '' },
            loading: false,
            isTermSelected: false
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleSignupKeyup(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = "";
            return { errors };
        });
    }

    aggreed = () => {
        this.setState({
            isTermSelected: !this.state.isTermSelected
        })
    }

    //signup form validation
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
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                )
            ) {
                formIsValid = false;
                errors["password"] =
                    "Password should have one number and one special character,minimum 8 characters";
            }
        }

        //Confirm Password
        if (
            typeof fields["conPassword"] !== "undefined" &&
            fields["conPassword"] !== ""
        ) {
            if (fields["conPassword"] !== fields["password"]) {
                errors["conPassword"] = "Password is Unmached.";
            }
        } else {
            errors["conPassword"] = "Confirm Password is Required";
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
        //ters and condition validation

        if (!this.state.isTermSelected) {
            formIsValid = false;
            errors["terms"] = "Please accept terms & conditions";
        }

        this.setState({ errors: errors });
        return formIsValid;
    };

    // button 
    signupWithPeatio = e => {
        e.preventDefault();
        console.log("FORM DATA", this.state.fields);
        this.setState({ loading: true });
        if (this.handleValidation() && this.state.isTermSelected) {
            loginApi.onSignup(this.state.fields)
                .then(res => {
                    console.log("Login response", res);
                    this.setState({ loading: false });

                    this.props.history.push("/email-verification", {
                        email: this.state.fields.email
                    });
                })
                .catch(error => {
                    debugger
                    this.setState({ loading: false });
                    toast.error("Error :" + error);
                });
        } else {
            this.setState({ loading: false });
        }
    };



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

export default Register
