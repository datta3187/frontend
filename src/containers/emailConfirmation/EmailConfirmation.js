import React, { Component } from 'react'
import * as loginApi from "../../api/loginApi"


class EmailConfirmation extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentWillMount = () => {
        console.log("VID", this.props.match.params.id);
        this.VerifyUserEmail(this.props.match.params.id);
    };

    VerifyUserEmail = id => {
        loginApi
            .verifyEmail(id)
            .then(res => {
                console.log("Verify response", res);
                // toast.success("Email has been verified successfully");
                // setTimeout(() => {
                //     this.props.history.push("/Pushr");
                // }, 2000);
            })
            .catch(error => {
                // toast.error(error.response.data.message);
                // setTimeout(() => {
                //     this.props.history.push("/Pushr");
                // }, 2000);
            });
    };



    render() {
        return (
            <div>
                Confirmed
            </div>
        )
    }
}

export default EmailConfirmation
