import React, {Component} from "react";
import {Button, Modal} from 'semantic-ui-react';
import { Form, Input } from 'semantic-ui-react-form-validator';


class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                old_password: '',
                new_password: '',
                confirm_password: ''
            },
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <Modal size="small" open={this.props.passwordModal} className="forgotPasswordModal">
                    <a className="mClose" onClick={() => this.setState({ passwordModal: false })}><i aria-hidden="true" className="close link icon"></i></a>
                    <Modal.Header>
                        <h3>Change Password?</h3>
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description >
                            <Form>
                                <Form.Field>
                                    <Input
                                        label="Old Password"
                                        type="text"
                                        onChange={this.setFormValue.bind(this, "old_password")}
                                        value={this.state.fields.old_password}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input
                                        label="New Password"
                                        type="text"
                                        onChange={this.setFormValue.bind(this, "new_password")}
                                        value={this.state.fields.new_password}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input
                                        label="Confirm Password"
                                        type="text"
                                        onChange={this.setFormValue.bind(this, "confirm_password")}
                                        value={this.state.fields.confirm_password}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Form.Field>
                                <Button className="resetButton" onClick={this.changePassword} primary>Submit</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </ div>
        )
    }
}

export default ChangePassword;
