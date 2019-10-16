import React, { Component } from 'react';
import { Container, Button, Checkbox, Form, Input, Modal } from 'semantic-ui-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import './User.scss';
import { toast } from 'react-toastify';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Api from '../../api/remoteApi';
import * as CustomError from '../../api/handleError';
import { fetchLogin, resetFailLogin } from '../../redux/actions/auth';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { email: '', password: '' , captcha_response: '', otp_code: ''},
            errors: { email: '', password: '', captcha_response: '' },
            forfields: { email: '' },
            loading: false,
            isParentOpen: false
        };
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
            errors[field] = '';
            return { errors };
        });
    }

    //signIn form validation
    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Password
        if (!fields['password']) {
            formIsValid = false;
            errors['password'] = 'Password is required.';
        }

        if (
            typeof fields['password'] !== 'undefined' &&
            fields['password'] !== ''
        ) {
            if (
                !fields['password'].match(
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,64}$/
                )
            ) {
                formIsValid = false;
                errors['password'] =
                    'Password should have one number and one special character,minimum 8 characters';
            }
        }
        //Email
        if (!fields['email']) {
            formIsValid = false;
            errors['email'] = 'Email is required';
        }

        if (typeof fields['email'] !== 'undefined' && fields['email'] !== '') {
            let lastAtPos = fields['email'].lastIndexOf('@');
            let lastDotPos = fields['email'].lastIndexOf('.');

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields['email'].indexOf('@@') === -1 &&
                    lastDotPos > 2 &&
                    fields['email'].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors['email'] = 'Email is not valid';
            }
        }

        if (config.captchaPolicy) {
            if (!fields['captcha_response']) {
                formIsValid = false;
                errors['captcha_response'] = 'Verify the captcha';
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
        if (!forfields['email']) {
            formIsValid = false;
            errors['email'] = 'Email is required';
        }

        if (typeof forfields['email'] !== 'undefined' && forfields['email'] !== '') {
            let lastAtPos = forfields['email'].lastIndexOf('@');
            let lastDotPos = forfields['email'].lastIndexOf('.');

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    forfields['email'].indexOf('@@') === -1 &&
                    lastDotPos > 2 &&
                    forfields['email'].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors['email'] = 'Email is not valid';
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    };

    signInWithPeatio = e => {
        e.preventDefault();
        if (this.handleValidation()) {
            this.props.fetchLogin(this.state.fields);
        }
    };

    forgotPassword = e => {
        e.preventDefault();

        if (this.handleForgotValidation()) {
            console.log('data :' + this.state.forfields);
            let api_url = 'identity/users/password/generate_code';
            let payload = this.state.forfields;
            Api.remoteApi(api_url, 'POST', payload)
                .then(res => {
                    this.setState({ isParentOpen: false });
                    toast.success('Password reset link has been sent on your email.');
                })
                .catch(error => {
                    CustomError.handle(error);
                });
        }
        else {
            this.setState({ loading: false });
        }
    };

    handleCaptcha = e => {
        let fields = this.state.fields;
        fields.captcha_response = e;
        this.setState({ fields });

        let errors = this.state.errors;
        errors.captcha_response = '';
        this.setState({ errors });
    };

    render() {
        if (config.captchaPolicy && this.props.error) {
            this.recaptcha.reset();
            this.props.resetFailLogin();
        }

        return (
            <div>
                {this.props.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

                <Header activePath='login' />
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
                                onChange={this.setFormValue.bind(this, 'email')}
                                onKeyUp={this.handleSignupKeyup.bind(this, 'email')}
                                iconPosition='left'
                                placeholder='Email' />
                            <span style={{ color: 'red' }}>
                                {this.state.errors['email']}
                            </span>
                        </Form.Field>

                        <Form.Field>
                            <label>Password</label>
                            <Input icon='lock'
                                type='password'
                                onChange={this.setFormValue.bind(this, 'password')}
                                onKeyUp={this.handleSignupKeyup.bind(this, 'password')}
                                iconPosition='left'
                                placeholder='Password' />
                            <span style={{ color: 'red' }}>
                                {this.state.errors['password']}
                            </span>
                        </Form.Field>

                        <Form.Field className="userFormAth">
                            <Checkbox label='Remember Me' />
                            <a onClick={() => this.setState({ isParentOpen: true })}>Forgot Password?</a>
                            {/* <Modal size="small" open={this.state.isParentOpen} trigger={<a>Forgot Password?</a>} className="forgotPasswordModal"> */}

                        </Form.Field>

                        <div className="form-captcha">
                            {(config.captchaPolicy) && (
                                <ReCAPTCHA
                                    ref={(r) => this.recaptcha = r}
                                    sitekey={config.recatpchaSiteKey}
                                    onChange={this.handleCaptcha}
                                />
                            )}
                            <span style={{ color: 'red' }}>
                                {this.state.errors['captcha_response']}
                            </span>
                        </div>

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
                        <span>We just need your registered email address to send you password reset</span>
                    </Modal.Header>

                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.Field>
                                    <label>Email</label>
                                    <Input icon='mail'
                                        type="email"
                                        onChange={this.setFormValue.bind(this, 'email')}
                                        onKeyUp={this.handleSignupKeyup.bind(this, 'email')}
                                        iconPosition='left'
                                        placeholder='Email' />
                                    <span style={{ color: 'red' }}>
                                        {this.state.errors['email']}
                                    </span>
                                </Form.Field>
                                <Button className="resetButton" onClick={this.forgotPassword} primary>Reset Password</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.auth.errorLogin,
        loading: state.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin: (payload) => dispatch(fetchLogin(payload)),
        resetFailLogin: () => dispatch(resetFailLogin())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Login);
