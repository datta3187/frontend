import React, { Component } from 'react'
import { Container, Button, Step, Icon } from 'semantic-ui-react'
import { Dropdown, Form, Input } from 'semantic-ui-react-form-validator';
import { DateInput } from 'semantic-ui-calendar-react';
import Footer from '../../components/Footer'
import Header from "../../components/Header";
import * as Api from "../../api/remoteApi";
import './Kyc.scss'
import { toast } from "react-toastify";
import LoginGuard from "../../components/loginGuard/LoginGuard";
import { Redirect } from "react-router";
import * as CustomError from "../../api/handleError";
import Auth from '../../components/Auth'

const auth = new Auth();

const docType = [
    { key: 'passport', value: 'passport', text: 'Passport' },
    { key: 'passport-front', value: 'passport-front', text: 'Passport Front' },
    { key: 'passport-back', value: 'passport-back', text: 'Passport Back' },
    { key: 'identity-card', value: 'identity-card', text: 'Identity card' },
    { key: 'identity-card-front', value: 'identity-card-front', text: 'Identity Card Front' },
    { key: 'identity-card-back', value: 'identity-card-back', text: 'Identity Card Back' },
    { key: 'driver-license', value: 'driver-license', text: 'Driver License' },
    { key: 'driver-license-front', value: 'driver-license-front', text: 'Driver License Front' },
    { key: 'driver-license-back', value: 'driver-license-back', text: 'Driver License Back' },
    { key: 'utility-bill', value: 'utility-bill', text: 'Utility Bill' },
    { key: 'faceid', value: 'faceid', text: 'Face ID' }
];


class Kyc extends Component {
    constructor(props) {
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            fields: {
                doc_type: '',
                doc_number: '',
                doc_expire: '',
                upload: ''
            },
            upload: [],

            loading: false,
        }
    }

    componentDidMount() {
        auth.fetchUser()
            .then(res => {
                let user = auth.getUser();
                if (user && user.level < 2) {
                    this.setState(
                        {
                            redirect: true,
                            redirect_to: '/phone'
                        }
                    )
                }
            })

    }

    onFileUploadChange = (e) => {
        this.setState({ upload: e.target.files[0] });
    };

    dropdownChange = (e, { name, value }) => {
        this.setState({ [name]: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields[name] = value;
            return { fields: fields };
        })
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    submitKyc = e => {
        e.preventDefault()
        let formData = new FormData(); //formdata
        formData.append('doc_type', this.state.fields.doc_type)
        formData.append('doc_number', this.state.fields.doc_number)
        formData.append('doc_expire', this.state.fields.doc_expire)
        formData.append('upload', this.state.upload)

        Api.onKyc(formData)
            .then(res => {
                console.log("KYC response", res);
                this.setState({ loading: false });
                toast.success("Submitted Successfully");
                this.props.history.push("/settings");
            })
            .catch(error => {
                CustomError.handle(error);
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: this.state.redirect_to,
                    state: { from: this.props.location }
                }}
            />
        }
        return (
            <LoginGuard>
                < div >
                    <Header />
                    <Container className="boxWithShadow userForms kycForm">
                        <div className="userFormHeader">
                            <h1>Know Your Customer</h1>
                        </div>
                        <Step.Group className="profileSepts">
                            <Step>
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
                            <Step active>
                                <Icon name='file' />
                                <Step.Content>
                                    <Step.Title>KYC</Step.Title>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                        <Form
                            ref="form"
                            onSubmit={this.submitKyc}
                        >
                            <div className="form-row">
                                <div className="form-group dd">
                                    <Dropdown
                                        label="Document type"
                                        placeholder="Document type"
                                        name="doc_type"
                                        onChange={this.dropdownChange}
                                        value={this.state.fields.doc_type}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        options={docType}
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        label="Document Number"
                                        type="text"
                                        placeholder="Document Number"
                                        onChange={this.setFormValue.bind(this, "doc_number")}
                                        value={this.state.fields.doc_number}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <div className="genderAndDatepicker">
                                        <div className="datePicker">
                                            <div>
                                                <DateInput
                                                    label="Document Expiry Date"
                                                    name="doc_expire"
                                                    iconPosition='left'
                                                    placeholder="yy/mm/dd"
                                                    value={this.state.fields.doc_expire}
                                                    onChange={this.dropdownChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Input
                                        label="Upload Document"
                                        type="file"
                                        name="upload"
                                        placeholder="Upload Document"
                                        value={this.state.upload.filename}
                                        onChange={this.onFileUploadChange}
                                    />
                                </div>
                            </div>

                            <Button>Submit</Button>
                        </Form>
                    </Container>
                    <Footer />
                </div >
            </LoginGuard>
        )
    }
}

export default Kyc
