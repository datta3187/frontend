import React, { Component } from "react";
import { Button, Modal } from 'semantic-ui-react';
import { Form, Input } from 'semantic-ui-react-form-validator';
import * as Api from "../../api/remoteApi";
import { toast } from "react-toastify";


class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                old_password: '',
                new_password: '',
                confirm_password: ''
            }
            // isOpen: props.passModalOpen
        }
    }


    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    changePassword = (e) => {
        e.preventDefault();
        let api_url = 'resource/users/password';
        console.log("data :" + this.state.fields);
        Api.remoteApi(api_url, 'put', this.state.fields)
            .then(res => {
                this.setState({ isOpen: false })
                toast.success("Password changed successfully");
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                }
                else {
                    toast.error("" + error);
                }
            })
    }

    render() {
        return (
            <div>
                <Modal size="small" open={this.props.passModalOpen} className="forgotPasswordModal">
                    <a className="mClose" onClick={this.props.closeModal}><i aria-hidden="true" className="close link icon"></i></a>
                    <Modal.Header>
                        <h3>Change Password?</h3>
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description >
                            <Form onSubmit={this.changePassword}>
                                <Input
                                    label="Old Password"
                                    type="password"
                                    onChange={this.setFormValue.bind(this, "old_password")}
                                    value={this.state.fields.old_password}
                                    validators={['required']}
                                    errorMessages={['Enter your old password']}
                                />
                                <Input
                                    label="New Password"
                                    type="password"
                                    onChange={this.setFormValue.bind(this, "new_password")}
                                    value={this.state.fields.new_password}
                                    validators={['required']}
                                    errorMessages={['Enter your password']}
                                />
                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    onChange={this.setFormValue.bind(this, "confirm_password")}
                                    value={this.state.fields.confirm_password}
                                    validators={['required']}
                                    errorMessages={['Enter your confirm password']}
                                />
                                <Button className="resetButton" primary>Submit</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </ div>
        )
    }
}

export default ChangePassword;
