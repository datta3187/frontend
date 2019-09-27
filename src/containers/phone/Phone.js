import React, { Component } from 'react';
import { Container, Button, Step, Icon } from 'semantic-ui-react';
import { Form, Input, Dropdown } from 'semantic-ui-react-form-validator';

import { ToastContainer, toast } from "react-toastify"

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LoginGuard from "../../components/loginGuard/LoginGuard";
import * as Api from "../../api/remoteApi";
import countryCodes from "./CountryCodes";
import './phone.scss'

export class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                phone_number: '',
                number: '',
                country_code: '',
                verification_code: ''
            },
            loading: false,
            show_otp_field: false,
            on_form_save: this.savePhone
        }
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        fields.phone_number = fields.country_code + fields.number;
        this.setState({ fields });
    }

    sendOtp = e => {
        e.preventDefault();
        let api_url = 'resource/phones/send_code';
        Api.remoteApi(api_url, 'post', this.state.fields)
            .then(res => {
                toast.success(res.message);
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                } else {
                    toast.error("" + error);
                }
            })
    };

    verifyPhone = e => {
        let api_url = 'resource/phones/verify';
        Api.remoteApi(api_url, 'post', this.state.fields)
            .then(res => {
                toast.success('Phone Verified Successfully');
                this.props.history.push('/settings')
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                } else {
                    toast.error("" + error);
                }
            })
    };

    savePhone = e => {
        this.setState({ loading: true });

        let api_url = 'resource/phones';
        Api.remoteApi(api_url, 'post', this.state.fields)
            .then(res => {
                toast.success(res.message);
                this.setState({ show_otp_field: true });
                this.setState({ on_form_save: this.verifyPhone });
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.errors[0]);
                    let phone_exists = (/registered/g).test(error.response.data.errors[0]);
                    if (phone_exists) {
                        this.setState({ show_otp_field: true });
                        this.setState({ on_form_save: this.verifyPhone });
                    }
                } else {
                    toast.error("" + error);
                }
            })
    };

    dropdownChange = (e, { name, value }) => {
        let fields = this.state.fields;
        fields.country_code = value;
        fields.phone_number = fields.country_code + fields.number;
        this.setState({ fields });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields[name] = value;
            return { fields: fields };                                 // return new object jasper object
        })
    };

    render() {
        return (
            // <LoginGuard>
            <div>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <Header />

                <Container className="boxWithShadow userForms phoneSection">
                    <div className="userFormHeader">
                        <h1>Phone</h1>
                    </div>

                    <Step.Group className="profileSepts">
                        <Step active>
                            <Icon name='phone' />
                            <Step.Content>
                                <Step.Title>Phone</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Icon name='user' />
                            <Step.Content>
                                <Step.Title>Profile</Step.Title>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Icon name='file' />
                            <Step.Content>
                                <Step.Title>KYC</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group>

                    <Form ref="form" onSubmit={this.state.on_form_save}>
                        <div className="form-row">
                            <div className="form-group ccDrop fw">
                                <Dropdown
                                    label="Country Code"
                                    placeholder="Country Code"
                                    name="country_code"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.country_code}
                                    validators={['required']}
                                    errorMessages={['You must select one option']}
                                    options={countryCodes}
                                    fluid
                                    search
                                    selection
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group fw ph">
                                <Input
                                    label="Phone Number"
                                    type="number"
                                    icon="phone"
                                    iconPosition="left"
                                    placeholder="Phone Number"
                                    onChange={this.setFormValue.bind(this, "number")}
                                    value={this.state.fields.number}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>

                        <div>
                            {(this.state.show_otp_field) &&
                                <div className="form-row">
                                    <div className="form-group fw otp-sec">
                                        <Input
                                            label="OTP"
                                            icon="barcode"
                                            iconPosition="left"
                                            type="number"
                                            placeholder="OTP"
                                            onChange={this.setFormValue.bind(this, "verification_code")}
                                            value={this.state.fields.verification_code}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <a className="resOtp" href="javascript:void(0)" onClick={this.sendOtp}>Resend OTP</a>
                                    </div>

                                </div>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <Button>Save Number</Button>
                            </div>
                        </div>

                    </Form>
                </Container>
                <Footer />
            </div>
            // </LoginGuard>
        )
    }
}

export default Phone
