import React, { Component } from 'react';
import {Container, Button, Step, Icon, Dimmer, Loader} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Form, Input, Dropdown } from 'semantic-ui-react-form-validator';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Auth from "../../components/Auth";
import { connect } from "react-redux";
import { setProfile, successProfile } from '../../redux/actions/profile'

const auth = new Auth();

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

export class Profile extends Component {

    constructor(props) {
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            fields: {
                first_name: '',
                last_name: '',
                dob: '',
                address: '',
                country: '',
                city: '',
                postcode: ''
            }
        }

    }

    // componentWillMount() {
    //     auth.fetchProfile()
    //         .then(res => {
    //             let profile = auth.getProfile();
    //             if (profile) {
    //                 this.setState(
    //                     {
    //                         redirect: true,
    //                         redirect_to: '/kyc'
    //                     }
    //                 )
    //             }
    //         })
    //
    //
    //     auth.fetchUser()
    //         .then(res => {
    //             let user = auth.getUser();
    //             if (user.level < 2) {
    //                 this.setState(
    //                     {
    //                         redirect: true,
    //                         redirect_to: '/phone'
    //                     }
    //                 )
    //             }
    //         })
    //
    // }



    setFormValue(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    dropdownChange = (e, { name, value }) => {
        this.setState({ [name]: value });

        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields[name] = value;
            return { fields: fields };
        })
    };

    handleChangeDate = (event, { name, value }) => {
        this.setState({ [name]: value });
        this.setState(prevState => {
            let fields = Object.assign({}, prevState.fields);
            fields.dob = value;
            return { fields: fields };
        })
    };

    saveProfile = e => {
        e.preventDefault();
        this.props.setProfile(this.state.fields);
    };


    render() {
        // if (this.state.redirect) {
        //     return <Redirect
        //         to={{
        //             pathname: this.state.redirect_to,
        //             state: { from: this.props.location }
        //         }}
        //     />
        // }
        return (
            <div>
                {/*{this.props.loading && (*/}
                    {/*<Dimmer active>*/}
                        {/*<Loader content="Loading..." />*/}
                    {/*</Dimmer>*/}
                {/*)}*/}

                <Header />

                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Profile</h1>
                    </div>

                    {/*<Step.Group className="profileSepts">*/}
                        {/*<Step>*/}
                            {/*<Icon name='phone' />*/}
                            {/*<Step.Content>*/}
                                {/*<Step.Title>Phone</Step.Title>*/}
                            {/*</Step.Content>*/}
                        {/*</Step>*/}
                        {/*/!*active *!/*/}
                        {/*<Step active >*/}
                            {/*<Icon name='user' />*/}
                            {/*<Step.Content>*/}
                                {/*<Step.Title>Profile</Step.Title>*/}
                            {/*</Step.Content>*/}
                        {/*</Step>*/}
                        {/*<Step>*/}
                            {/*<Icon name='file' />*/}
                            {/*<Step.Content>*/}
                                {/*<Step.Title>KYC</Step.Title>*/}
                            {/*</Step.Content>*/}
                        {/*</Step>*/}
                    {/*</Step.Group>*/}

                    <Form
                        ref="form"
                        onSubmit={this.saveProfile}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <Input
                                    label="First Name"
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
                                    label="Last Name"
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
                                                label="Date of Birth"
                                                placeholder="Date Of Birth"
                                                name="date"
                                                iconPosition='left'
                                                value={this.state.fields.dob}
                                                onChange={this.handleChangeDate}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <Input
                                    label="Address"
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
                                    label="City"
                                    placeholder="City"
                                    name="city"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.city}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    options={regionOptions}
                                />
                            </div>
                            <div className="form-group  dd">
                                <Dropdown
                                    label="Country"
                                    placeholder="Country"
                                    name="country"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.country}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    options={countryOptions}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <Input
                                    label="Postal Code"
                                    type="text"
                                    placeholder="Postal Code"
                                    onChange={this.setFormValue.bind(this, "postcode")}
                                    value={this.state.fields.postcode}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>

                        <Button>Submit</Button>
                    </Form>
                </Container>
                <Footer />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.profile.error,
        loading: state.profile.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setProfile: (payload) => dispatch(setProfile(payload)),
        successProfile: () => dispatch(successProfile())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Profile);
