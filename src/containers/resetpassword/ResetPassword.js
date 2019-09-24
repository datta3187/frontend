import React, { Component } from 'react'
import {Container, Button, Checkbox, Form, Input, Image, Modal, Transition, Dimmer, Loader} from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as Api from "../../api/remoteApi";
import {toast, ToastContainer} from "react-toastify";

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {reset_password_token: '', password: '', confirm_password: '', lang: 'EN'},
            errors: {reset_password_token: '', password: '', confirm_password: ''},
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
        console.log('done')
    }

    resetState(field, e) {
        console.log('Helo');
    }
    handleValidation(){

    }

    resetPassword = e => {
        e.preventDefault();
        debugger
        this.handleValidation()
        this.setState({ loading: true });
        let api_url = 'identity/users/password/confirm_code'
        // if (this.handleValidation() && this.state.isTermSelected) {
        //     Api.remoteApi(api_url, 'POST' , this.state.data)
        //         .then(res => {
        //             this.setState({loading: false})
        //             toast.success('Password has been reset successfully!');
        //             this.props.history.push("/login")
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
        // else {
        //     this.setState({ loading: false });
        // }
    }

    render() {
        return (
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
                        <h1>Reset Password</h1>
                        <p>Password must contain one lowercase letter, one number, and be  atleast 8 characters long</p>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>New Password</label>
                            <Input icon='lock'
                                type='password'
                                onChange={this.setFormValue.bind(this, "password")}
                                onKeyUp={this.resetState.bind(this, "password")}
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
                                onKeyUp={this.resetState.bind(this, "password")}
                                iconPosition='left'
                                placeholder='Password' />
                            <span style={{ color: "red" }}>
                                {this.state.errors["password"]}
                            </span>
                        </Form.Field>

                        <div className="form-captcha"></div>
                        <div className="form-button">
                            <Button onClick={this.resetPassword} primary>Primary</Button>
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
