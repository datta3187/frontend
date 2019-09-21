import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import {Form, Input, Dropdown} from 'semantic-ui-react-form-validator';

import * as profileApi from "../../api/profileApi";
import { toast } from "react-toastify"


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
                        this.props.history.push("/profile")

                    }, 2000)
                }
                // this.props.history.push("/Pusher/thanks", {
                //     email: this.state.fields.email
                // });
            })
            .catch(error => {
                this.setState({loading: false});
                debugger
            });

    }


    render() {
        return (
            <div>
                <Header />

                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Profile</h1>
                    </div>

                    {/*<Form>*/}
                        {/*<div className="kycWithThreeFields">*/}
                            {/*<Form.Field>*/}
                                {/*<label>First Name</label>*/}
                                {/*<Input type="text"*/}
                                       {/*value={this.state.fields.first_name}*/}
                                    {/*onChange={this.setFormValue.bind(this, "first_name")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "firstname")}*/}
                                    {/*placeholder='First Name' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["email"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}

                            {/*<Form.Field>*/}
                                {/*<label>Last Name</label>*/}
                                {/*<Input type="text"*/}
                                       {/*value={this.state.fields.last_name}*/}
                                    {/*onChange={this.setFormValue.bind(this, "last_name")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "lastName")}*/}
                                    {/*placeholder='Last Name' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["conPassword"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                        {/*</div>*/}
                        {/*<div className="genderAndDatepicker">*/}
                            {/*<div className="datePicker">*/}
                                {/*<label>Date of Birth</label>*/}
                                {/*<div>*/}
                                    {/*<DateInput*/}
                                        {/*name="date"*/}
                                        {/*iconPosition='left'*/}
                                        {/*startMode="['year', 'month', 'day']"*/}
                                        {/*placeholder="Date"*/}
                                        {/*value={this.state.fields.date}*/}
                                        {/*onChange={this.handleChangeDate}*/}
                                    {/*/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<Form.Field>*/}
                            {/*<label>Address</label>*/}
                            {/*<Input type="text"*/}
                                {/*onChange={this.setFormValue.bind(this, "address")}*/}
                                {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "address")}*/}
                                {/*iconPosition='left' placeholder='Address' />*/}
                        {/*</Form.Field>*/}

                        {/*<div className="kycWithThreeFields">*/}
                            {/*<Form.Field>*/}
                                {/*<label>Country</label>*/}
                                {/*<Select placeholder='country'*/}
                                        {/*name='country'*/}
                                    {/*options={countryOptions}*/}
                                        {/*value={this.state.fields.country}*/}
                                        {/*onChange={this.dropdownChange} />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["email"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}

                            {/*<Form.Field>*/}
                                {/*<label>City</label>*/}
                                {/*<Select placeholder='City'*/}
                                        {/*name='city'*/}
                                        {/*options={regionOptions}*/}
                                        {/*value={this.state.fields.city}*/}
                                        {/*onChange={this.dropdownChange} />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["password"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}

                            {/*<Form.Field>*/}
                                {/*<label>Postal Code</label>*/}
                                {/*<Input type="text"*/}
                                       {/*value={this.state.fields.postcode}*/}
                                    {/*onChange={this.setFormValue.bind(this, "postcode")}*/}
                                    {/*onKeyUp={this.handleSaveProfileKeyup.bind(this, "postalCode")}*/}
                                    {/*placeholder='Last Name' />*/}
                                {/*<span style={{ color: "red" }}>*/}
                                    {/*{this.state.errors["conPassword"]}*/}
                                {/*</span>*/}
                            {/*</Form.Field>*/}
                        {/*</div>*/}

                        {/*<Form.Field className="userFormAth">*/}
                            {/*<span style={{ color: "red" }}>*/}
                                {/*{this.state.errors["terms"]}*/}
                            {/*</span>*/}
                        {/*</Form.Field>*/}
                        {/*<div className="form-button">*/}
                            {/*<Button type='submit' onClick={this.saveprofile} primary>Submit</Button>*/}
                            {/*<Button type='submit' secondary>Cancel</Button>*/}
                        {/*</div>*/}
                    {/*</Form>*/}
                    <Form
                        ref="form"
                        onSubmit={this.saveprofile}
                    >
                        <Input
                            type="text"
                            placeholder="First Name"
                            onChange={this.setFormValue.bind(this, "first_name")}
                            value={this.state.fields.first_name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            width={50}
                        />

                        <Input
                            type="text"
                            placeholder="Last Name"
                            onChange={this.setFormValue.bind(this, "last_name")}
                            value={this.state.fields.last_name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            width={50}
                        />

                        {/*<Input*/}
                            {/*type="text"*/}
                            {/*placeholder="Date Of Birth"*/}
                            {/*onChange={this.handleChangeDate}*/}
                            {/*value={this.state.fields.dob}*/}
                            {/*validators={['required']}*/}
                            {/*errorMessages={['this field is required']}*/}
                        {/*/>*/}

                        <div className="genderAndDatepicker">
                            <div className="datePicker">
                                <div>
                                <DateInput
                                    placeholder="Date Of Birth"
                                name="date"
                                iconPosition='left'
                                startMode="['year', 'month', 'day']"
                                placeholder="Date"
                                value={this.state.fields.date}
                                onChange={this.handleChangeDate}
                                />
                                </div>
                            </div>
                        </div>

                        <Input
                            type="text"
                            placeholder="Address"
                            onChange={this.setFormValue.bind(this, "address")}
                            value={this.state.fields.address}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            width={50}
                        />


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

                        <Input
                            type="text"
                            placeholder="Postal Code"
                            onChange={this.setFormValue.bind(this, "postcode")}
                            value={this.state.fields.postcode}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            width={50}
                        />


                        <Button color="teal">Submit</Button>
                        </Form>
                </Container>
                <Footer />

            </div>
        )
    }
}

export default Profile
