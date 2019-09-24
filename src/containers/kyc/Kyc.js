import React, { Component } from 'react'
import { Container, Form, Input, Select, Checkbox, Radio, Button, Dropdown } from 'semantic-ui-react'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';
import Footer from '../../components/Footer'
import LoggedInHeader from "../../components/LoggedInHeader";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as loginApi from "../../api/authApi";
import FileBase64 from 'react-file-base64';

import './Kyc.scss'



const docType = [
    { key: 'Passport', value: 'Passport', text: 'Passport' },
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
                upload: '',
                filename: '',
                file_ext: '',
                uid: ''
            },
            errors: {
                doc_type: '',
                doc_number: '',
                doc_expire: '',
                upload: '',
            },
            loading: false,
        }

    }

    // Passing uid
    componentWillMount = () => {
        var uid = JSON.parse(localStorage.getItem('user'));
        // console.log("local", uid.referral_uid)
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields.uid = uid.referral_uid;
            return { fields: fields };
        })
    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleSignupKeyup(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = "";
            return { errors };
        });
    }

    handleChangeDate = (event, { name, value }) => {
        this.setState({ [name]: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields.doc_expire = value;
            return { fields: fields };
        })
    }

    getDocument = (event, { value }) => {
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields.doc_type = value;
            return { fields: fields };
        })
    }


    // File Upload
    getFiles(files) {
        console.log("FILE", files)
        console.log("BASE64", files[0].base64);
        console.log("FileName", files[0].file.name);
        console.log("file_ext", files[0].file.type);

        // delete image path folder name        
        var extCrop = files[0].file.type;
        var finalextCrop = extCrop.replace('image/', '')

        // delete data:image/png;base64 form String       
        var image = files[0].base64;
        var finalImag = image.replace('data:image/png;base64,', '')




        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields.file_ext = finalextCrop;
            fields.upload = finalImag;
            fields.filename = files[0].file.name;
            return { fields: fields };                                 // return new object jasper object
        })
        console.log("states", this.state)
    }


    //signup form validation
    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Document Type
        if (!fields["doc_type"]) {
            formIsValid = false;
            errors["doc_type"] = "Please Select Document Type.";
        }

        //Document Number
        if (!fields["doc_number"]) {
            formIsValid = false;
            errors["doc_number"] = "Please add Document Number.";
        }
        //Upload File
        if (!fields["doc_expire"]) {
            formIsValid = false;
            errors["doc_expire"] = "Please Select Expiry Date.";
        }
        //Upload File
        if (!fields["upload"]) {
            formIsValid = false;
            errors["upload"] = "Please Upload Document.";
        }

        this.setState({ errors: errors });
        return formIsValid;
    };



    signupkyc = e => {
        e.preventDefault();
        console.log("FORM DATA", this.state.fields);
        if (this.handleValidation()) {
            loginApi.onKyc(this.state.fields)
                .then(res => {
                    console.log('data sent', res)
                })
                .catch(errors => {
                    console.log('Error', errors)
                })
        }
        else {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            < div >
                <LoggedInHeader />
                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Know Your Customer</h1>
                    </div>
                    <Form>
                        <div className="kycWithThreeFields">
                            <Form.Field>
                                <label>Document Type</label>
                                <Select placeholder='Document Type'
                                    options={docType}
                                    // onChange={this.setFormValue.bind(this, "doc_type")}
                                    onChange={this.getDocument}
                                    onClick={this.handleDocType} />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["doc_type"]}
                                </span>
                            </Form.Field>
                            <Form.Field>
                                <label>Document Number</label>
                                <Input type="text"
                                    onChange={this.setFormValue.bind(this, "doc_number")}
                                    onKeyUp={this.handleSignupKeyup.bind(this, "doc_number")}
                                    placeholder='Document Number' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["doc_number"]}
                                </span>
                            </Form.Field>
                            <Form.Field>
                                <div className="datePicker expDate">
                                    <label>Expiry Date</label>
                                    <div>
                                        <DateInput
                                            name="doc_expire"
                                            iconPosition='left'
                                            dateFormat='YYYY-MM-DD'
                                            startMode="['year', 'month', 'day']"
                                            placeholder="Date"
                                            value={this.state.doc_expire}
                                            onChange={this.handleChangeDate}
                                        />
                                    </div>
                                </div>
                                <span style={{ color: "red" }}>
                                    {this.state.errors["doc_expire"]}
                                </span>
                            </Form.Field>
                        </div>
                        <div className="kycWithThreeFields">
                            <Form.Field>
                                <label>Upload Document</label>
                                <FileBase64
                                    multiple={true}
                                    onDone={this.getFiles.bind(this)} />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["upload"]}
                                </span>
                            </Form.Field>
                        </div>
                        <Form.Field className="userFormAth">
                            <span style={{ color: "red" }}>
                                {this.state.errors["terms"]}
                            </span>
                        </Form.Field>
                        <div className="form-button">
                            <Button type='submit' onClick={this.signupkyc} primary>Submit</Button>
                            <Button type='submit' secondary>Cancel</Button>
                        </div>
                    </Form>
                </Container>
                <Footer />
            </div >
        )
    }
}

export default Kyc
