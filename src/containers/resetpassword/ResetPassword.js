import React, { Component } from 'react'
import { Container, Button, Form, Input, Dimmer, Loader } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import * as Api from "../../api/remoteApi";
import * as CustomError from "../../api/handleError";
import {toast} from "react-toastify";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { reset_password_token: '', password: '', confirm_password: '', lang: 'EN' },
            errors: { password: '', confirm_password: '' },
            loading: false
        }
    }

    componentDidMount() {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data.reset_password_token = this.props.match.params.token
            return { data };
        });

    }

    setFormValue(field, e) {
        let data = this.state.data;
        data[field] = e.target.value;
        this.setState({ data });
    }

    // hide all errors on key press
    hideErrors(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = "";
            return { errors };
        });
    }

    handleValidation() {
        let data = this.state.data;
        let errors = {};
        let formIsValid = true;

        Object.keys(this.state.errors).map((key) => {
            if (!data[key]) {
                formIsValid = false
                errors[key] = `${key} is required.`
            }
        });

        if (typeof data["password"] !== "undefined" && data["password"].length > 0) {
            if (!data["password"].match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$/)) {
                formIsValid = false;
                errors["password"] = "Password should have one number and one special character,minimum 8 characters";
            }
        }

        if (data['password'].length > 0 && data['confirm_password'].length > 0) {
            if (data['password'] !== data['confirm_password']) {
                errors['confirm_password'] = "Passwords do not match."
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    resetPassword = e => {
        e.preventDefault();
        this.setState({ loading: true });
        let api_url = 'identity/users/password/confirm_code';
        if (this.handleValidation()) {
            Api.remoteApi(api_url, 'POST', this.state.data)
                .then(res => {
                    this.setState({ loading: false });
                    this.props.history.push("/login", {
                        email_verified: true
                    });
                    toast.success("Password changed successfully");
                })
                .catch(error => {
                    CustomError.handle(error)
                })
        }
        else {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div>
                {this.state.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

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
                                onKeyUp={this.hideErrors.bind(this, "password")}
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
                                onChange={this.setFormValue.bind(this, "confirm_password")}
                                onKeyUp={this.hideErrors.bind(this, "confirm_password")}
                                iconPosition='left'
                                placeholder='confirm password' />
                            <span style={{ color: "red" }}>
                                {this.state.errors["confirm_password"]}
                            </span>
                        </Form.Field>

                        <div className="form-captcha"></div>
                        <div className="form-button">
                            <Button onClick={this.resetPassword} primary>Change Password</Button>
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
