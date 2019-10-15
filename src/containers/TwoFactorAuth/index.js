import React, { Component } from 'react';
import {Container, Button, Form, Dimmer, Loader, Input} from 'semantic-ui-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { toast } from 'react-toastify';
import compose from "recompose/compose";
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
        debugger
        console.log('helo')
        this.props.fetch2fa(this.state.code);

    }

    render(){
        return(
            <div>
                {this.state.loading && (
                    <Dimmer active>
                        <Loader content="Loading..." />
                    </Dimmer>
                )}

                <Header activePath='login' />
                <Container className="boxWithShadow userForms">
                    <div className="userFormHeader">
                        <h1>Sign in</h1>
                        <p>Enter 2FA Code</p>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>Code</label>
                            <Input
                                   type="text"
                                   name="code"
                                   onChange={this.handleChange.bind(this, 'code')}
                            />
                        </Form.Field>
                        <Button onClick={this.submitCode} primary>SUBMIT</Button>
                    </Form>
                </Container>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetch2fa: (otpCode) => dispatch(fetch2fa(otpCode))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(TwoFactorAuth);


