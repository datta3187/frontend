import React, { Component } from 'react'
import { Container, Form, Input, Select, Checkbox, Radio, Button, Dropdown } from 'semantic-ui-react'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';
import * as profileApi from "../../api/profileApi";
import { ToastContainer, toast } from "react-toastify"


import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
    constructor(props) {
        window.scrollTo(0, 0);
        super(props)
        this.state = {
            fields: {
                first_name: '',
                // middleName: '',
                last_name: '',
                dob: '',
                // date: '',
                // time: '',
                // dateTime: '',
                // datesRange: '',
                address: '',
                country: '',
                city: '',
                postcode: '',
                // phoneNumber: '',
                // documentType: '',
                // documentNumber: '',
                // expiryDate: '',
                // uploadDocument: '',
                // SelfiWithIdProof: '',
                // gender: ""
            },
            errors: {
                firstname: '',
                // middleName: '',
                lastName: '',
                dateOfBirth: '',
                address: '',
                city: '',
                country: '',
                postalCode: '',
                // phoneNumber: '',
                // documentType: '',
                // documentNumber: '',
                // expiryDate: '',
                // uploadDocument: '',
                // SelfiWithIdProof: ''
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

    handleSaveProfileKeyup(field, e) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[field] = "";
            return { errors };
        });
    }

    handleChangeDate = (event, { name, value }) => {
        // if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        debugger
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields.dob = value;                     // update the name property, assign a new value
            return { fields: fields };                                 // return new object jasper object
        })
        // }
    }

    radioChange = (e, { value }) => {
        this.setState({ value: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);  // creating copy of state variable jasper
            fields.gender = value;                     // update the name property, assign a new value                 
            return { fields: fields };                                 // return new object jasper object
        })
    }

    //
    // signupkyc = e => {
    //     e.preventDefault();
    //     debugger
    //     console.log("FORM DATA", this.state.fields);
    // }

    // button
    saveprofile = e => {
        e.preventDefault();
        console.log("FORM DATA", this.state.fields);
        this.setState({ loading: true });
        debugger
        profileApi.onProfileSubmission(this.state.fields)
            .then(res => {
                console.log("Profile response", res);
                debugger
                this.setState({ loading: false });
                if (res.state == 'pending') {
                    toast.error("something something");
                } else {

                    localStorage.setItem("user", JSON.stringify(res));
                    toast.success("submitted successfully");
                    setTimeout(() => {
                        this.props.history.push("/kyc")

                    }, 2000)
                }
                // this.props.history.push("/Pusher/thanks", {
                //     email: this.state.fields.email
                // });
            })
            .catch(error => {
                this.setState({ loading: false });
                debugger
                // toast.error(error.response.data.message);
            });
    };


    render() {
        return (
            < div >
                <Header />

                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Profile</h1>
                    </div>
                    <Form>

                        <div className="kycWithThreeFields">
                            <Form.Field>
                                <label>First Name</label>
                                <Input type="text"
                                    onChange={this.setFormValue.bind(this, "first_name")}
                                    onKeyUp={this.handleSaveProfileKeyup.bind(this, "firstname")}
                                    placeholder='First Name' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["email"]}
                                </span>
                            </Form.Field>
                            {/*<Form.Field>*/}
                                {/*<label>Middle Name</label>*/}
                                {/*<Input type="text"*/}
                                    {/*onChange={this.setFormValue.bind(this, "middleName")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "middleName")}*/}
                                    {/*placeholder='Middle Name' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["password"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                            <Form.Field>
                                <label>Last Name</label>
                                <Input type="text"
                                    onChange={this.setFormValue.bind(this, "last_name")}
                                    onKeyUp={this.handleSaveProfileKeyup.bind(this, "lastName")}
                                    placeholder='Last Name' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["conPassword"]}
                                </span>
                            </Form.Field>
                        </div>
                        <div className="genderAndDatepicker">
                            {/*<div className="gender">*/}
                                {/*<label>Gender</label>*/}
                                {/*<Form.Field>*/}
                                    {/*<Radio*/}
                                        {/*label='Male'*/}
                                        {/*name='gender'*/}
                                        {/*value='male'*/}
                                        {/*checked={this.state.value === 'male'}*/}
                                        {/*onChange={this.radioChange}*/}
                                    {/*/>*/}
                                {/*</Form.Field>*/}
                                {/*<Form.Field>*/}
                                    {/*<Radio*/}
                                        {/*label='Female'*/}
                                        {/*name='gender'*/}
                                        {/*value='female'*/}
                                        {/*checked={this.state.value === 'female'}*/}
                                        {/*onChange={this.radioChange}*/}
                                    {/*/>*/}
                                {/*</Form.Field>*/}
                                {/*<Form.Field>*/}
                                    {/*<Radio*/}
                                        {/*label='Other'*/}
                                        {/*name='gender'*/}
                                        {/*value='other'*/}
                                        {/*checked={this.state.value === 'other'}*/}
                                        {/*onChange={this.radioChange}*/}
                                    {/*/>*/}
                                {/*</Form.Field>*/}
                            {/*</div>*/}
                            <div className="datePicker">
                                <label>Date of Birth</label>
                                <div>
                                    <DateInput
                                        name="date"
                                        iconPosition='left'
                                        startMode="['year', 'month', 'day']"
                                        placeholder="Date"
                                        value={this.state.date}
                                        onChange={this.handleChangeDate}
                                    />
                                </div>
                            </div>
                        </div>
                        <Form.Field>
                            <label>Address</label>
                            <Input type="text"
                                onChange={this.setFormValue.bind(this, "address")}
                                onKeyUp={this.handleSaveProfileKeyup.bind(this, "address")}
                                iconPosition='left' placeholder='Address' />
                        </Form.Field>

                        <div className="kycWithThreeFields">
                            <Form.Field>
                                <label>Country</label>
                                <Select placeholder='country'
                                        name='country'
                                    options={countryOptions}
                                        value={this.state.country}
                                        onChange={this.dropdownChange} />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["email"]}
                                </span>
                            </Form.Field>
                            {/*<Form.Field>*/}
                                {/*<label>City</label>*/}
                                {/*<Select placeholder='City'*/}
                                    {/*options={regionOptions}*/}
                                    {/*onChange={this.setFormValue.bind(this, "city")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "city")} />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["password"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}

                            <Form.Field>
                                <label>City</label>
                                <Select placeholder='City'
                                        name='city'
                                        options={regionOptions}
                                        value={this.state.city}
                                        onChange={this.dropdownChange} />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["password"]}
                                </span>
                            </Form.Field>

                            <Form.Field>
                                <label>Postal Code</label>
                                <Input type="text"
                                    onChange={this.setFormValue.bind(this, "postcode")}
                                    onKeyUp={this.handleSaveProfileKeyup.bind(this, "postalCode")}
                                    placeholder='Last Name' />
                                <span style={{ color: "red" }}>
                                    {this.state.errors["conPassword"]}
                                </span>
                            </Form.Field>
                        </div>
                        {/*<div className="kycWithThreeFields">*/}
                            {/*<Form.Field>*/}
                                {/*<label>Phone Number</label>*/}
                                {/*<Input type="text"*/}
                                    {/*onChange={this.setFormValue.bind(this, "phoneNumber")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "phoneNumber")}*/}
                                    {/*placeholder='Phone Number' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["email"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                            {/*<Form.Field>*/}
                                {/*<label>Document Type</label>*/}
                                {/*<Select placeholder='City'*/}
                                    {/*options={docOptions}*/}
                                    {/*onChange={this.setFormValue.bind(this, "documentType")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "documentType")} />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["password"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                            {/*<Form.Field>*/}
                                {/*<label>Document Number</label>*/}
                                {/*<Input type="text"*/}
                                    {/*onChange={this.setFormValue.bind(this, "documentNumber")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "documentNumber")}*/}
                                    {/*placeholder='Document Number' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["conPassword"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                        {/*</div>*/}
                        {/*<div className="kycWithThreeFields">*/}
                            {/*<Form.Field>*/}
                                {/*<label>Expiry Date</label>*/}
                                {/*<Input type="text"*/}
                                    {/*onChange={this.setFormValue.bind(this, "expiryDate")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "expiryDate")}*/}
                                    {/*iconPosition='left'*/}
                                    {/*placeholder='Expiry Date' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["email"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                        {/*</div>*/}
                        <Form.Field className="userFormAth">
                            <span style={{ color: "red" }}>
                                {this.state.errors["terms"]}
                            </span>
                        </Form.Field>
                        <div className="form-button">
                            <Button type='submit' onClick={this.saveprofile} primary>Submit</Button>
                            <Button type='submit' secondary>Cancel</Button>
                        </div>
                    </Form>
                </Container>
                {/* <h2>{JSON.stringify(identity)}</h2> */}
                <Footer />
            </div >
        )
    }
}

export default Profile
