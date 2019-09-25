import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Dropdown, Form, Input } from 'semantic-ui-react-form-validator';
import { DateInput } from 'semantic-ui-calendar-react';
import Footer from '../../components/Footer'
import Header from "../../components/Header";
import * as authApi from "../../api/authApi";

import './Kyc.scss'
import { toast } from "react-toastify";
import LoginGuard from "../../components/login_guard/LoginGuard";


const docType = [
    { key: 'passport', value: 'passport', text: 'Passport' },
    { key: 'Identity card', value: 'Identity card', text: 'Identity card' },
    { key: 'Driver license', value: 'Driver license', text: 'Driver license' },
    { key: 'Utility Bill', value: 'Utility Bill', text: 'Utility Bill' }
]


class Kyc extends Component {

    constructor(props) {
        window.scrollTo(0, 0);
        super(props)
        this.state = {
            fields: {
                doc_type: '',
                doc_number: '',
                doc_expire: '',
                upload: ''
            },
            errors: {
                doc_type: '',
                doc_number: '',
                doc_expire: '',
                upload: null,
            },
            upload: [],

            loading: false,
        }
    }



    onFileUploadChange = (e) => {
        // const formData = new FormData();
        // formData.append
        // var file = e.target.files[0];
        // this.setState(prevState => ({
        //     upload: [...prevState.upload, file]
        // }));
        this.setState({ upload: e.target.files[0] });
    }


    handleChangeDocExpire = (event, { name, value }) => {
        // if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields.doc_expire = value;                     // update the name property, assign a new value
            return { fields: fields };                                 // return new object jasper object
        })
        // }
    }


    dropdownChange = (e, { name, value }) => {
        this.setState({ [name]: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields[name] = value;
            return { fields: fields };                                 // return new object jasper object
        })
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    signupkyc = e => {
        e.preventDefault()
        let formData = new FormData(); //formdata
        formData.append('doc_type', this.state.fields.doc_type)
        formData.append('doc_number', this.state.fields.doc_number)
        formData.append('doc_expire', this.state.fields.doc_expire)
        formData.append('upload', this.state.upload)

        // const formData = new FormData();
        // formData.append('doc_type',this.state.fields.doc_type)
        // formData.append('doc_number',this.state.fields.doc_number)
        // formData.append('doc_expire',this.state.fields.doc_expire)
        // this.state.upload.map(function(file){
        //     formData.append('upload', file)
        // })

        authApi.onKyc(formData)
            .then(res => {
                console.log("KYC response", res);
                this.setState({ loading: false });
                toast.success("submitted successfully");
                this.props.history.push("/settings");
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
            <LoginGuard>
                < div >
                    <Header />
                    <Container className="boxWithShadow userForms kycForm">
                        <div className="userFormHeader">
                            <h1>Know Your Customer</h1>
                        </div>

                        <Form
                            ref="form"
                            onSubmit={this.signupkyc}
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
                                        validators={['required']}
                                        errorMessages={['You must select one option']}
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
                                                    placeholder="Document Expiry Date"
                                                    name="doc_expire"
                                                    iconPosition='left'
                                                    startMode="['year', 'month', 'day']"
                                                    placeholder="yy/mm/dd"
                                                    value={this.state.fields.doc_expire}
                                                    onChange={this.handleChangeDocExpire}
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
                                    // validators={['required']}
                                    // errorMessages={['this field is required']}
                                    // allowedExtensions={['jpeg']}
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
