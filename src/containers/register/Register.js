import React, { Component } from 'react';
import { Container, Form, Input, Checkbox, Button } from 'semantic-ui-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';
import ReCAPTCHA from 'react-google-recaptcha';
import {fetchRegister} from "../../redux/actions/register";
import {connect} from "react-redux";
import queryString from 'query-string';

class Register extends Component {
    constructor(props) {
        super(props);
        // Use referral Link to register
        let refId = queryString.parse(window.location.search)['refId'];
        let referralId = (refId !== undefined  ? refId : config.referralId);

        this.state = {
            fields: { email: '', password: '', conPassword: '', refid: referralId, terms: '' },
            errors: { email: '', password: '', conPassword: '', refid: '', terms: '', captcha_response: '' },
            loading: false,
            isTermSelected: false
        };
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleSignupKeyup(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = '';
            return { errors };
        });
    }

    agreed = () => {
        this.setState({
            isTermSelected: !this.state.isTermSelected
        });
    }

    //signup form validation
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
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                )
            ) {
                formIsValid = false;
                errors['password'] =
                    'Password should have one number and one special character,minimum 8 characters';
            }
        }

        //Confirm Password
        if (
            typeof fields['conPassword'] !== 'undefined' &&
            fields['conPassword'] !== ''
        ) {
            if (fields['conPassword'] !== fields['password']) {
                errors['conPassword'] = 'Passwords don\'t match';
            }
        } else {
            errors['conPassword'] = 'Confirm Password is Required';
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
        //terms and condition validation

        if (!this.state.isTermSelected) {
            formIsValid = false;
            errors['terms'] = 'Please accept terms & conditions';
        }

        if (config.captchaPolicy) {
            if (!fields['captcha_response']) {
                formIsValid = false;
                errors['captcha_response'] = 'Verify the captcha';
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    };

    // button 
    signupWithPeatio = e => {
        e.preventDefault();
        if (this.handleValidation() && this.state.isTermSelected) {
            this.props.fetchRegister(this.state.fields);
            // this.props.history.push("/email-verification", {
            //     email: this.state.fields.email
            // });
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
        return (
            < div >
                {this.props.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

                <Header activePath='register' />
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
                                onChange={this.setFormValue.bind(this, 'email')}
                                onKeyUp={this.handleSignupKeyup.bind(this, 'email')}
                                iconPosition='left'
                                placeholder='Email' />
                            <span style={{ color: 'red' }}>
                                {this.state.errors['email']}
                            </span>
                        </Form.Field>
                        <div className="confirmPw">
                            <Form.Field>
                                <label>Password</label>
                                <Input icon='lock' type="password"
                                    onChange={this.setFormValue.bind(this, 'password')}
                                    onKeyUp={this.handleSignupKeyup.bind(this, 'password')}
                                    iconPosition='left' placeholder='Password' />
                                <span style={{ color: 'red' }}>
                                    {this.state.errors['password']}
                                </span>
                            </Form.Field>
                            <Form.Field>
                                <label>Confirm Password</label>
                                <Input icon='lock' type="password"
                                    onChange={this.setFormValue.bind(this, 'conPassword')}
                                    onKeyUp={this.handleSignupKeyup.bind(this, 'conPassword')}
                                    iconPosition='left' placeholder='Password' />
                                <span style={{ color: 'red' }}>
                                    {this.state.errors['conPassword']}
                                </span>
                            </Form.Field>
                        </div>
                        <Form.Field>
                            <label>Referral Id</label>
                            <Input icon='mail' type="text"
                                value={this.state.fields.refid}
                                onChange={this.setFormValue.bind(this, 'refid')}
                                onKeyUp={this.handleSignupKeyup.bind(this, 'refid')}
                                iconPosition='left' placeholder='Referral Id' />
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
                        <Form.Field className="userFormAth">
                            <Checkbox onClick={this.agreed} label="I agree to AnXchange' s Terms of Use" />
                            <span style={{ color: 'red' }}>
                                {this.state.errors['terms']}
                            </span>
                        </Form.Field>
                        <div className="form-button">
                            <Button type='submit' onClick={this.signupWithPeatio} primary>Sign Up</Button>
                            <p>Already have an account?  <Link to="/login">Sign In</Link></p>
                        </div>
                    </Form>
                </Container>
                {/* <h2>{JSON.stringify(identity)}</h2> */}
                <Footer />
            </div >
        );
    }
}

function mapStateToProps(state){
    return {
        loading: state.register.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRegister: (payload) => dispatch(fetchRegister(payload))
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(Register);

