import React, { Component } from 'react'
import {Dimmer, Loader} from "semantic-ui-react";
import * as Api from "../../api/remoteApi";
import {toast} from "react-toastify";


class EmailConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount = () => {
        let api_url = 'identity/users/email/confirm_code';
        let payload = this.props.match.params.token;
        Api.remoteApi(api_url, 'POST', payload )
        // loginApi.verifyEmail(this.props.match.params.token)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push("/login");
                toast.success('Email has been verified successfully!');
            })
            .catch(err => {
                this.setState({ loading: false });
                this.props.history.push("/login");
                toast.error('Invalid token');
            })
    };

    render() {
        return (
            <div>
                {this.state.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}
            </div>
        )
    }
}

export default EmailConfirmation
