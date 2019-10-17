import React, { Component } from 'react'
import {Card, Input, Checkbox } from 'semantic-ui-react'
import Buttonn from '../../common/buttonn'
import { connect } from 'react-redux';
import config from "../../config";
import ReCAPTCHA from 'react-google-recaptcha';
import {Link} from "react-router-dom";


class HomeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { email: '', password: '', conPassword: '', refid: config.referralId, terms: '' },
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


    submituserRegistrationForm =(e) =>{
        e.preventDefault(); 
        if(this.validateForm()){ 
            let obj={ 
                user_name : this.state.name ,
                email : this.state.email ,
                password : this.state.password ,
                refid : this.state.refferal_ID,
                lang : this.state.language
             } 
             this.props.register_users(obj);

            console.log("my form data :  : ",obj); 
        }
    }

    validateForm(){ 
          let errors = {};
          let formIsValid = true;
  
             if(!this.state.email){
              formIsValid = false;
              errors['email'] = "*Please enter a valid Email address."
          }
  
          if(this.state.email){
              var pattern =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
              if(!pattern.test(this.state.email)){
                  formIsValid = false;
                  errors['email'] = "*Please enter a valid email address";
              }
          } 
          if(!this.state.password){
              formIsValid = false;
              errors[this.state.password] = '*PLease enter your password.' 
          }
          if(typeof this.state.password !== "undefined"){
              if(!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
                  formIsValid = false;
                  errors['password'] = '* Please enter secure and strong password.';
              }
          }
          
          if(this.state.password !== this.state.confirm_password){
            formIsValid = false;
            errors['confirm_password'] = "* Passwords don't match"
          }
          this.setState({
              errors : errors
          }) 
          return formIsValid;
      }


    render() {
        return (
            <div>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                REGISTER WITH TRADENCE
                            </Card.Header>
                            <Card.Description>
                                Trusted by millions of people across the globe
                            </Card.Description>

                            <form method='post' name = 'userRegistrationForm' onSubmit={this.submituserRegistrationForm}>
                                <div className="form-grp">
                                    <Input icon='mail'
                                           type="email"
                                           onChange={this.setFormValue.bind(this, 'email')}
                                           onKeyUp={this.handleSignupKeyup.bind(this, 'email')}
                                           iconPosition='left'
                                           placeholder='Email' />
                                    <div className='errorMsg'>{this.state.errors['email']}</div>
                                </div>
                                <div className="form-grp">
                                    <Input icon='lock' type="password"
                                           onChange={this.setFormValue.bind(this, 'password')}
                                           onKeyUp={this.handleSignupKeyup.bind(this, 'password')}
                                           iconPosition='left' placeholder='Password' />
                                    <div className='errorMsg'>{this.state.errors['password']}</div>
                                </div>
                                <div className="form-grp">
                                    <Input icon='lock' type="password"
                                           onChange={this.setFormValue.bind(this, 'conPassword')}
                                           onKeyUp={this.handleSignupKeyup.bind(this, 'conPassword')}
                                           iconPosition='left' placeholder='Confirm Password' />
                                    <div className='errorMsg'>{this.state.errors['conPassword']}</div>
                                </div>
                                <div className="form-grp">
                                    <Input icon='mail' type="text"
                                           value={this.state.fields.refid}
                                           onChange={this.setFormValue.bind(this, 'refid')}
                                           onKeyUp={this.handleSignupKeyup.bind(this, 'refid')}
                                           iconPosition='left' placeholder='Referral Id' />
                                </div>

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
                                <Checkbox onClick={this.agreed} label="I agree to Tradence's Terms of Use" />
                                <span style={{ color: 'red' }}>
                                    {this.state.errors['terms']}
                                </span>

                                <Buttonn buttons='REGISTER'></Buttonn>
                            </form>
                        </Card.Content>
                    </Card> 
                </Card.Group>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        register_users: (payload) => {}
    }
}
 
const Register_User = connect(null, mapDispatchToProps)(HomeCard);
export default Register_User;