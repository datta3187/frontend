import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import {Form, Input, Dropdown} from 'semantic-ui-react-form-validator';

import * as profileApi from "../../api/profileApi";
import { ToastContainer, toast } from "react-toastify"


import Footer from '../../components/Footer'
import LoggedInHeader from '../../components/LoggedInHeader'

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'Ind', value: 'Ind', text: 'India' }
]
const regionOptions = [
    { key: 'Ka', value: 'Ka', text: 'Kabul' },
    { key: 'Kan', value: 'Kan', text: 'Kandahar' },
    { key: 'Mohali', value: 'Mohali', text: 'Mohali' },
]
const docOptions = [
    { key: 'Word', value: 'Word', text: 'Word' },
    { key: 'PDF', value: 'PDF', text: 'PDF' },
]

export class Profile extends Component {

    componentDidMount()
    {
        profileApi.getProfile()
            .then(res => {
                debugger
                this.setState({
                    fields: res
                })
            })
            .catch(error => {

            });
    }

    constructor(props) {
        window.scrollTo(0, 0);
        super(props)
        this.state = {
            fields: {
                first_name: '',
                last_name: '',
                dob: '',
                address: '',
                country: '',
                city: '',
                postcode: ''
            },
            errors: {
                first_name: '',
                last_name: '',
                dob: '',
                address: '',
                city: '',
                country: '',
                postcode: ''
            },
            loading: false,
        }

    }

    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    dropdownChange = (e, {name, value}) => {
        this.setState({ [name]: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            // fields.city = value;
            fields[name] = value;
            return { fields: fields };                                 // return new object jasper object
        })
    }

    handleChangeDate = (event, { name, value }) => {
        // if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields.dob = value;                     // update the name property, assign a new value
            return { fields: fields };                                 // return new object jasper object
        })
        // }
    }

    saveprofile = e => {
        e.preventDefault();
        console.log("FORM DATA", this.state.fields);
        this.setState({ loading: true })
        profileApi.onProfileSubmission(this.state.fields)
            .then(res => {
                console.log("Profile response", res);
                this.setState({loading: false});
                if (res.state == 'pending') {
                    toast.error("something something");
                } else {

                    localStorage.setItem("user", JSON.stringify(res));
                    toast.success("submitted successfully");
                    setTimeout(() => {
                        this.props.history.push("/kyc")

                    }, 2000)
                }
            })
            .catch(err => {
                this.setState({loading: false})
                if (err.message != "Network Error"){
                    toast.error(err.response.data.errors);
                }else{
                    toast.error(err.message);                }
            });

    }


    render() {
        return (
            <div>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <LoggedInHeader />

                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Profile</h1>
                    </div>

                    <Form
                        ref="form"
                        onSubmit={this.saveprofile}
                    >
                        <div className="form-row">
                                <div className="form-group">
                                    <Input
                                        type="text"
                                        placeholder="First Name"
                                        onChange={this.setFormValue.bind(this, "first_name")}
                                        value={this.state.fields.first_name}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={this.setFormValue.bind(this, "last_name")}
                                        value={this.state.fields.last_name}
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
                                                placeholder="Date Of Birth"
                                                name="date"
                                                iconPosition='left'
                                                startMode="['year', 'month', 'day']"
                                                placeholder="Date"
                                                value={this.state.fields.dob}
                                                onChange={this.handleChangeDate}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    placeholder="Address"
                                    onChange={this.setFormValue.bind(this, "address")}
                                    value={this.state.fields.address}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group dd">
                                <Dropdown
                                    Placeholder="City"
                                    name="city"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.city}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    validators={['required']}
                                    errorMessages={['You must select one option']}
                                    options={regionOptions}
                                />
                            </div>
                            <div className="form-group  dd">
                                <Dropdown
                                    Placeholder="Country"
                                    name="country"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.country}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    validators={['required']}
                                    errorMessages={['You must select one option']}
                                    options={countryOptions}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <Input
                                    type="text"
                                    placeholder="Postal Code"
                                    onChange={this.setFormValue.bind(this, "postcode")}
                                    value={this.state.fields.postcode}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>

                        <Button color="teal">Submit</Button>
                    </Form>
                </Container>
                <Footer />

            </div>
        )
    }
}

export default Profile
