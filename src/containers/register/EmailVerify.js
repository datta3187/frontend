import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as CustomError from "../../api/handleError";
import * as Api from "../../api/remoteApi";


class EmailVerify extends Component {
    constructor(props) {
        super(props);

        if (props && typeof (props.location.state) !== "undefined") {
            this.state = {
                user: { email: props.location.state.email },
                flag: true
            }
        }
        else {
            this.state = { flag: false, user: {} }
        }
    }

    componentDidMount() {
        if (this.state.flag) {
            toast.success('An email confirmation has been sent on your registered email.');
        }
    }

    resendEmail = () => {
        let api_url = 'identity/users/email/generate_code';
        let payload = this.state.user
        Api.remoteApi(api_url, 'POST', payload)
            // loginApi.resendVerification(this.state.user)
            .then(res => {
                toast.success('Email has been re-sent successfully!');
            })
            .catch(error => {
                CustomError.handle(error)
            })
    }

    render() {
        return (
            <div>
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
