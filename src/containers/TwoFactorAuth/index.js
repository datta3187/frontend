import React, { Component } from 'react';
import {Container, Button, Dimmer, Loader} from 'semantic-ui-react';
import { Input, Form } from 'semantic-ui-react-form-validator';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {connect} from "react-redux";
import {fetch2fa} from "../../redux/actions/twoFactorAuth";

class TwoFactorAuth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: null
        }

        this.submitCode = this.submitCode.bind(this);
    }

    handleChange(field, e){
        this.setState({ code: e.target.value });
    }

    submitCode(){
        this.props.fetch2fa(this.state.code);
    }

    render(){
        return(
            <div>
                {this.props.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

                <Header activePath='login' />
                <Container className="boxWithShadow userForms">
                    <Form ref="form" onSubmit={this.submitCode}
                    >
                        <Input
                               type="text"
                               placeholder="Enter 2FA Code"
                               onChange={this.handleChange.bind(this, 'code')}
                               value={this.state.code}
                               validators={['required']}
                               errorMessages={['Required']}
                        />
                        <Button primary>SUBMIT</Button>
                    </Form>
                </Container>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        error: state.twoFactorAuth.error,
        loading: state.twoFactorAuth.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetch2fa: (otpCode) => dispatch(fetch2fa(otpCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoFactorAuth);


