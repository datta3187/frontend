import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Container} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import * as loginApi from "../../api/loginApi";


class EmailVerify extends Component {
    constructor(props) {
        super(props)


        if (props && typeof(props.location.state) !== "undefined"){
            this.state = {
                user: {email: props.location.state.email},
                flag: true
            }
            toast.success('An email confirmation has been sent on your registered email.');
        }
        else{
            this.state = {flag: false, user: {} }
        }
    }

    resendEmail = () => {
        loginApi.resendVerification(this.state.user)
            .then(res => {
                toast.success('Email has been re-sent successfully!');
            })
            .catch(error => {
                toast.error("Error: "+ error);
            })
    }

    render(){
        return(
            <div>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <Header />
                <Container className="boxWithShadow userForms verifyBlock">
                    <div className="userFormHeader">
                        <h1>VERIFY YOUR EMAIL ADDRESS{this.state.flag}</h1>
                        <p>To complete registration, check for an email in your inbox with further instruction. If you cannot find the email, please check your spam folder</p>
                    </div>
                    <div text-align="center">
                        {
                            this.state.flag ? <Link onClick={this.resendEmail}>Resend email</Link> : null
                        }

                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default EmailVerify
